import classNames from "classnames";
import pluralize from "pluralize";
import { CommentsDialogActionType, useCommentsDialog } from "../../contexts/comments";
import { Post } from "@sazo/types";
import { ChatBubbleIcon, LoadingSpinner, Tooltip } from "@sazo/ui";
import { useGetComments } from "@sazo/core";
import { CommentsList } from "../Comment/CommentsList";
import { CommentComposer } from "../Comment/CommentComposer";

interface Props {
    post: Post;
}

export function FeedComments(props: Props) {
    const { post } = props;
    const getComments = useGetComments(post?.id);
    const { isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
        getComments;
    let comments = getComments.data?.pages.map((page) => page.data).flat(2);

    comments = comments?.filter(
        (v, i, a) => a.findIndex((v2) => v2?.id === v?.id) === i
    );

    if (!getComments.data && getComments.isFetching) {
        return (
            <div className="flex items-center justify-center flex-1 py-16 text-center">
                <LoadingSpinner />
            </div>
        )
    }

    return (
        <>
            <div className={"mt-2 ml-4 border-l-2 border-gray-200 mb-4"}>
                <div className="px-4">
                    <CommentsList comments={comments} post={post} />
                </div>
            </div>
            <CommentComposer post={post} onCommentCreated={() => console.log()} />
        </>
    )
}
