import { useRouter } from "next/router";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { Button, Dialog, DialogFooter } from "@sazo/ui";
import { useDeletePost } from "@sazo/core";
import { Post } from "@sazo/types";

interface Props {
    post: Post;
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
}

export function DeletePostDialog({ post, isVisible, setIsVisible }: Props) {
    const deletePostMutation = useDeletePost()
    const router = useRouter()

    const isViewingPost = !!router.query.postId || !!router.query.id

    const handleCleanup = useCallback(() => {
        toast.success("Post deleted")

        setIsVisible(false)

        if (isViewingPost) router.push({ pathname: '/' })
    }, [])

    function handleDelete() {
        deletePostMutation.mutate(
            {
                id: post.id
            },
            {
                onSuccess: () => {
                    handleCleanup()
                }
            }
        )
    }

    return (
        <Dialog
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            title="Delete post"
            description={"Are you sure you want to delete this post?"}
            width="max-w-lg"
        >
            <DialogFooter>
                <Button
                    destructive
                    onClick={handleDelete}
                    disabled={
                        deletePostMutation.isLoading
                    }
                >
                    {deletePostMutation.isLoading ? "Deleting..." : "Delete"}
                </Button>
            </DialogFooter>
        </Dialog>
    )
}
