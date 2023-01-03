import { Post, Comment } from "@sazo/types";
import { ActionMenu, LinkIcon, PencilIcon, TrashIcon, useCopyToClipboard } from "@sazo/ui";
import { useGetCurrentUser } from "@sazo/core";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { DeleteCommentDialog } from "./DeleteCommentDialog";

interface Props {
    comment: Comment;
    post: Post;
    isEditing: boolean;
    setIsEditing: (isEditing: boolean) => void;
}

export function CommentOverflowDropdown(props: Props) {
    const { comment, post, setIsEditing, isEditing } = props;
    const { data: currentUser } = useGetCurrentUser();
    const [copy] = useCopyToClipboard();
    const [dialogIsVisible, setDialogIsVisible] = useState(false);

    const currentUserIsAuthor = currentUser?.id === comment.user.id;

    const defaultActions = [
        {
            label: "Copy link",
            icon: <LinkIcon />,
            onClick: () => {
                copy(comment.url);
                toast.success("Copied link to clipboard");
            },
        },
    ];

    const authorActions = [
        {
            separator: true,
            label: undefined,
        },
        {
            label: "Edit",
            icon: <PencilIcon />,
            onClick: () => setIsEditing(!isEditing),
        },
        {
            label: "Delete",
            icon: <TrashIcon />,
            destructive: true,
            onClick: () => {
                setDialogIsVisible(true);
            },
        },
    ];

    const actions = currentUserIsAuthor
        ? [...defaultActions, ...authorActions]
        : defaultActions;

    if (isEditing) return <div className="w-8 h-8" />;

    return (
        <>
            <DeleteCommentDialog
                comment={comment}
                post={post}
                isVisible={dialogIsVisible}
                setIsVisible={setDialogIsVisible}
            />

            <ActionMenu actions={actions} />
        </>
    );
}
