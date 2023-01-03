import {useState} from "react";
import Link from "next/link";
import { CommentDescription } from "./CommentDescription";
import { Post, Comment } from "@sazo/types";
import { Avatar } from "@sazo/ui";
import { MemberHoverCard } from "../Member/HoverCard";
import { AVATAR_FALLBACK } from "@sazo/configuration";
import { CommentComposer } from "./CommentComposer";
import { CommentOverflowDropdown } from "./CommentOverflowDropdown";

type Props = {
    comment: Comment;
    post: Post;
}

export function CommentComponent({ comment, post }: Props) {
    const [isEditing, setIsEditing] = useState(false);

    const createdAt = new Date(comment.created_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    });

    const file = post.files.find((f) => f.id === comment.file_id);

    return (
        <div className="flex flex-1 space-x-3">
            <div className="relative flex flex-col flex-1">
                <div className="inline-flex items-center space-x-1">
                    <div className="flex w-full space-x-1 leading-tight">
                        <Link
                            href={`/people/${comment.user?.username}`}
                            className="inline-flex rounded-full"
                        >
                            <div>
                                <Avatar
                                    className="rounded-full w-10 h-10 inline-block"
                                    size={44}
                                    src={comment.user?.avatar_url ? comment.user.avatar_url : AVATAR_FALLBACK}
                                />
                            </div>
                        </Link>
                        <div className="flex items-center flex-1 space-x-2 pl-2">
                            <div className="flex flex-col w-full space-y-0.5">
                                <Link
                                    href={`/people/${comment.user?.username}`}
                                    className="inline-flex font-medium leading-tight"
                                >
                                    {comment.user?.full_name}
                                </Link>

                                <span className="inline-flex flex-wrap items-center space-x-1 leading-tight">
                                    <Link
                                        href={`/people/${comment.user?.username}`}
                                        className="hover:text-neutral-600 text-neutral-400"
                                    >
                                        {comment.user?.tagline ? comment.user?.tagline : comment.user?.email}
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>

                    <CommentOverflowDropdown
                        comment={comment}
                        post={post}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                    />
                </div>

                <div className="flex space-x-3 mt-2">
                    <div className="flex-1">
                        <CommentDescription
                            isEditing={isEditing}
                            setIsEditing={setIsEditing}
                            post={post}
                            comment={comment}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
