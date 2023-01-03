import { useState } from "react";
import toast from "react-hot-toast";
import { DeletePostDialog } from "./PostDeleteDialog";
import { ActionMenu, ActionType, LinkIcon, TrashIcon, useCopyToClipboard } from "@sazo/ui";
import { WEB_URL } from "@sazo/configuration";
import { Post } from "@sazo/types";

interface Props {
    post: Post;
    isEditing: boolean;
    setIsEditing: (isEditing: boolean) => void;
}

export function PostDropdown(props: Props) {
    const [dialogVisible, setDialogVisible] = useState(false);

    const { post } = props
    const [copy] = useCopyToClipboard()

    const actions = [
        {
            icon: <LinkIcon />,
            label: "Copy private link",
            onClick: () => {
                copy(`${WEB_URL}/post/${post.id}`)
                toast.success("copied to clipboard")
            }
        },
        {
            separator: true,
            label: undefined
        },
        {
            icon: <TrashIcon />,
            label: "Delete",
            destructive: true,
            onClick: () => setDialogVisible(true)
        }
    ].filter(Boolean) as ActionType[];

    return (
        <>
            <DeletePostDialog
                post={post}
                isVisible={dialogVisible}
                setIsVisible={setDialogVisible}
            />

            <ActionMenu actions={actions} />
        </>
    )
}
