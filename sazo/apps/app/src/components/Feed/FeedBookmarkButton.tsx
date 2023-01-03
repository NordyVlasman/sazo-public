import classNames from "classnames";
import pluralize from "pluralize";
import { Post } from "@sazo/types";
import { useBookmarkPost, useRemovePostBookmark } from "@sazo/core";
import { BookmarkIcon, Tooltip } from "@sazo/ui";

interface Props {
    post: Post;
}

export function FeedBookmarkButton(props: Props) {
    const { post } = props;

    const createBookmark = useBookmarkPost()
    const removeBookmark = useRemovePostBookmark()

    function onCreateBookmark() {
        if (post.has_bookmarked) {
            removeBookmark.mutate({ id: post.id })
        } else {
            createBookmark.mutate({ id: post.id })
        }
    }

    function getClasses(has_bookmarked: boolean) {
        return classNames(
            "ml-2 flex gap-1.5 items-center p-1 justify-center group h-7 rounded-lg text-sm font-medium",
            {
                "ring-opacity-5 pr-2.5 bg-white text-zinc-900": has_bookmarked,
                "text-zinc-600 hover:bg-white hover:border-gray-200": !has_bookmarked,
            }
        );
    }


    return (
        <span>
            <Tooltip
                label="Krijg een berichtje bij een nieuwe reactie"
            >
                <button
                    type="button"
                    onClick={() => onCreateBookmark()}
                    className={getClasses(post.has_bookmarked)}
                >
                    <span className="-translate-y-[1px]">
                        <BookmarkIcon size={20} />
                    </span>
                    <span>{ post.has_bookmarked ? "Verwijderen uit opgeslagen" : "Opslaan"}</span>
                </button>
            </Tooltip>
        </span>
    )
}
