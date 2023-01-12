import { User, Comment, CommentsPagination, Post, PostPagination } from "@sazo/types";
import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/router";
import { apiUrl, postJSON } from "../utils";


export interface Props {
  body: string;
  html: string;
}

export function useCreateComment(postId: string) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const isViewingHomeFeed = router.pathname === "/";
  const isViewingMember = !!router.query.username;
  let key = `/api/v1/post`;

  if (isViewingMember)
    key = `/api/v1/members/${router.query.username}/posts`;

  const commentsKey = [
    `/api/v1/post/${postId}/comments`,
    postId,
  ];

  return useMutation(
    async ({ html, ...data }: Props) => {
      return await postJSON(
        apiUrl(`/api/v1/post/${postId}/comments`),
        data
      );
    },
    {
      onMutate: async (data: Props) => {
        const currentUser = queryClient.getQueryData([
          apiUrl("/api/v1/me"),
        ]) as User;

        const newComment = {
          id: `temp-${Math.random()}`,
          body: data.body,
          body_html: data.html,
          created_at: new Date().toISOString(),
          url: "",
          is_optimistic: true,
          user: {
            ...(currentUser as User),
          },
        } as Comment;

        const commentsKey = [
          `/api/v1/post/${postId}/comments`,
          postId,
        ];

        const previousComments =
          queryClient.getQueryData<InfiniteData<CommentsPagination>>(
            commentsKey
          );

        await queryClient.cancelQueries(commentsKey);

        if (!previousComments) return;

        const [firstPage, ...restPages] = previousComments.pages;

        const newFirstPage = {
          ...firstPage,
          data: [newComment, ...firstPage.data],
        };

        const newComments = {
          ...previousComments,
          pages: [newFirstPage, ...restPages],
        };

        queryClient.setQueryData(commentsKey, newComments);

        const postQueryKey = [
          apiUrl(`/api/v1/post/${postId}`),
        ];

        const postData = queryClient.getQueryData<Post>(postQueryKey);

        if (!postData) return;

        queryClient.setQueryData(
          [apiUrl(`/api/v1/post/${postId}`)],
          (old: any) => ({
            ...old,
            comments_count: old.comments_count + 1,
          })
        );
      },
      onSuccess: (data) => {
        const persistedComment = data as Comment;

        const previousComments =
          queryClient.getQueryData<InfiniteData<CommentsPagination>>(
            commentsKey
          );

        if (!previousComments) return;

        const [firstPage, ...restPages] = previousComments.pages;

        const newFirstPage = {
          ...firstPage,
          data: firstPage.data.map((comment) => {
            if (comment.is_optimistic)
              /*
                This is important: we don't want to swap out the full optimistic
                comment because we use the optimistic comment's `created_at` field
                as a key for the framer motion divs, so that things animate in
                and out smoothly. You need a persistent key, otherwise Framer will
                stutter; for that reason, we use the `created_at` field from the optimistic
                comment as a stable key.

                Here, we just want to make sure that the cache has the correct id
                in case the user edits or deletes their comment right away.
              */
              return {
                ...comment,
                id: persistedComment.id,
                body_html: persistedComment.body_html,
                is_optimistic: false,
              };
            return comment;
          }),
        };

        const newComments = {
          ...previousComments,
          pages: [newFirstPage, ...restPages],
        };

        queryClient.setQueryData(commentsKey, newComments);

        if (
          isViewingMember ||
          isViewingHomeFeed
        ) {
          const previousFeed = queryClient.getQueryData<
            InfiniteData<PostPagination>
          >([key]);

          if (!previousFeed) return;

          const newFeedPages = previousFeed.pages.map((page) => {
            return {
              ...page,
              data: page.data.map((post) => {
                if (post.id !== postId) return post;
                return {
                  ...post,
                  comments_count: post.comments_count + 1,
                };
              }),
            };
          });

          queryClient.setQueryData([key], {
            ...previousFeed,
            pages: newFeedPages,
          });
        }
      },
    }
  );
}
