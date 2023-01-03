import classNames from "classnames";
import pluralize from "pluralize";
import { CommentsDialogActionType, useCommentsDialog } from "../../contexts/comments";
import { Post } from "@sazo/types";
import { ChatBubbleIcon, Tooltip } from "@sazo/ui";

interface Props {
    post: Post;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export function FeedCommentsButton(props: Props) {
    const { post } = props;

    const commentsDialog = useCommentsDialog();

    function getClasses(count: number) {
        return classNames(
            "flex gap-1.5  items-center p-1 justify-center group h-7 text-sm font-medium rounded-lg -ml-2",
            {
                "text-zinc-600": !props.isOpen,
                "text-zinc-900": props.isOpen,
            }
        );
    }


    return (
        <span>
          <button
              type="button"
              onClick={() => props.setIsOpen(!props.isOpen)}
              className={getClasses(post.comments_count)}
          >
              <span className="-translate-y-[1px]">
                  <ChatBubbleIcon size={15} />
              </span>
              <span>{ props.isOpen ? "Verberg reacties" : "Toon reacties"}</span>
          </button>
        </span>
    )
}
