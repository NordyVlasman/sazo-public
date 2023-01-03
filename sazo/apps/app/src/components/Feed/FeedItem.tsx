import { useState } from "react";
import { PostByLine } from "../Post/PostByLine";
import { PostDescription } from "../Post/PostDescription";
import { Files } from "../Post/PostFiles";
import { PostTags } from "../Post/PostTags";
import { FeedBookmarkButton } from "./FeedBookmarkButton";
import { FeedCommentsButton } from "./FeedCommentButton";
import { useGetCurrentUser } from "@sazo/core";
import { Post } from "@sazo/types";
import { ComposerDialogActionType } from "../../contexts/composer";
import { CommentsList } from "../Comment/CommentsList";
import { useCommentsDialog } from "../../contexts/comments";
import { FeedComments } from "./FeedComments";

interface Props {
    post: Post
}

export function FeedItem({ post }: Props) {
    const [isEditing, setIsEditing] = useState(false)
    const { data: currentUser } = useGetCurrentUser();
    const [commentsOpen, setCommentsOpen] = useState(false)

    return (
        <>
            <div className="py-4 my-2 scroll-m-12">
                <div>
                    <PostByLine
                        post={post}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                    />
                </div>

                <div className="relative space-x-1 mt-4 space-y-3.5">

                    <PostTags post={post} />
                    <ul role="list" className="mt-3 leading-8 space-x-2">
                        {post.workarea && (
                            <li className="inline">
                                <span
                                    className="relative inline-flex items-center rounded-full bg-sky-100 px-3 py-0.5 text-sm font-medium text-sky-900"
                                >
                                    {post.workarea}
                                </span>
                            </li>
                        )}
                        {post.career && (
                            <li className="inline">
                                <span
                                    className="relative inline-flex items-center rounded-full bg-emerald-100 px-3 py-0.5 text-sm font-medium text-emerald-900">
                                    {post.career}
                                </span>
                            </li>
                        )}
                    </ul>


                    <PostDescription
                        post={post}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                    />

                    <Files post={post} />

                    {!isEditing && (
                        <div className="flex flex-wrap">
                            <FeedCommentsButton post={post} isOpen={commentsOpen} setIsOpen={setCommentsOpen}/>
                            <FeedBookmarkButton post={post}/>
                        </div>
                    )}
                </div>

                {commentsOpen && <FeedComments post={post} />}
            </div>
        </>
    )
}
