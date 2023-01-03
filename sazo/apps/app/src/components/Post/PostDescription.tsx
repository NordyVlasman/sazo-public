import { Post } from "@sazo/types";
import { HTMLRenderer } from "../HTMLRenderer";

type Props = {
    post: Post;
    isEditing: boolean;
    setIsEditing: (isEditing: boolean) => void;
}

export function PostDescription(props: Props) {
    const { post } = props;

    return <HTMLRenderer text={post.description_html} />
}
