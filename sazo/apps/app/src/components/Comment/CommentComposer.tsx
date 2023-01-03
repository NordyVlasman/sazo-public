import { FormEvent, useCallback, useState } from "react";
import MarkdownEditor from "../MarkdownEditor";
import { Post } from "@sazo/types";
import { useCreateComment, useGetCurrentUser } from "@sazo/core";
import { ArrowDownIcon, Avatar, Button } from "@sazo/ui";
import { AVATAR_FALLBACK } from "@sazo/configuration";

type Props = {
    post: Post;
    onCommentCreated: () => void;
}

export function CommentComposer(props: Props) {
    const {
        post,
        onCommentCreated
    } = props

    const emptyMarkdown = ""
    const emptyHtml = "<p></p>";
    const [markdown, setMarkdown] = useState(emptyMarkdown)
    const [html, setHtml] = useState(emptyHtml)
    const createComment = useCreateComment(post.id)

    const { data: currentUser } = useGetCurrentUser()

    const onSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()

        setMarkdown(emptyMarkdown)
        setHtml(emptyHtml)

        onCommentCreated()

        if (markdown.trim() === emptyMarkdown) return

        createComment.mutate({ body: markdown, html })

    }, [markdown, html, createComment, onCommentCreated])

    //@ts-ignore
    function handleCommandEnter(event: KeyboardEvent<HTMLFormElement>) {
        if (event.key === "Enter" && event.metaKey) {
            onSubmit(event);
        }
    }

    function onChange(markdown: string, html?: string) {
        setMarkdown(markdown);
        html && setHtml(html);
    }

    return (
        <form
            onKeyDownCapture={handleCommandEnter}
            onSubmit={onSubmit}
            className="relative flex space-x-3"
        >
            <div>
                <Avatar size={32} src={currentUser.avatar_url ? currentUser.avatar_url : AVATAR_FALLBACK} className={"rounded-full mt-1"} />
            </div>
            <div className="flex items-center justify-between flex-1 px-3 py-2 text-black transition-shadow bg-white rounded-md shadow-sm hover:shadow ring-1 ring-black ring-opacity-5">
                <MarkdownEditor
                    placeholder="Write a comment..."
                    content={markdown}
                    onChange={onChange}
                    slim
                    autoFocus
                />
                <Button
                    disabled={markdown.trim().length === 0}
                    submit
                    onClick={onSubmit}
                >
                    Reageer
                </Button>
            </div>
        </form>
    )
}
