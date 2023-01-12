import {useCallback} from "react";
import toast from "react-hot-toast";
import { Post, Comment } from "@sazo/types";
import { Button, Dialog, DialogFooter } from "@sazo/ui";
import { useDeleteComment } from "@sazo/core";

interface Props {
    comment: Comment;
    post: Post;
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
}

export function DeleteCommentDialog({
    comment,
    post,
    isVisible,
    setIsVisible
}: Props) {

    const deleteCommentMutation = useDeleteComment({
        post_id: post.id,
        comment_id: comment.id,
    })

    const handleCleanup = useCallback(() => {
        toast.success("Comment deleted")

        setIsVisible(false)
    }, [comment.id, setIsVisible])

    return (
        <Dialog
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            title="Delete comment"
            description="Are you sure you want to delete this comment?"
            width="max-w-sm"
        >
            <DialogFooter>
                <Button onClick={() => setIsVisible(false)}>Cancel</Button>
                <Button
                    destructive
                    onClick={() =>
                        deleteCommentMutation.mutate(undefined, {
                            onSuccess: () => handleCleanup(),
                        })
                    }
                    disabled={deleteCommentMutation.isLoading}
                >
                    {deleteCommentMutation.isLoading ? "Deleting..." : "Delete"}
                </Button>
            </DialogFooter>
        </Dialog>
    )
}