import { CommentsPagination, PostPagination } from "@sazo/types";
import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/router";
import { apiUrl, deleteJSON } from "../utils";

type Props = {
  post_id: string;
  comment_id: string;
};

export function useDeleteComment({ post_id, comment_id }: Props) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const isViewingHomeFeed = router.pathname === "/";
  const isViewingUserProfile = !!router.query.username;

  const commentsKey = [
    `/api/v1/post/${post_id}/comments`,
    post_id,
  ];

  let key = `/api/v1/posts`;

  return useMutation(
    async () => {
      return await deleteJSON(
        apiUrl(
          `/api/v1/post/${post_id}/comments/${comment_id}`
        )
      );
    },
    {
      onMutate: () => {
        const previousComments =
          queryClient.getQueryData<InfiniteData<CommentsPagination>>(
            commentsKey
          );

        if (!previousComments) return;

        const newComments = {
          ...previousComments,
          pages: previousComments.pages.map((page) => {
            return {
              ...page,
              data: page.data.filter((comment) => comment.id !== comment_id),
            };
          }),
        };

        queryClient.setQueryData(commentsKey, newComments);
      },
      onSuccess: () => {
        if (
          isViewingUserProfile ||
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
                if (post.id !== post_id) return post;
                return {
                  ...post,
                  comments_count: post.comments_count - 1,
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
