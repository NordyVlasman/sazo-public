
import { HTMLRenderer } from "../HTMLRenderer";
import { Post, Comment } from "@sazo/types";

type Props = {
  comment: Comment;
  post: Post;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
};

export function CommentDescription(props: Props) {
  const { comment, post, isEditing, setIsEditing } = props;

//   if (isEditing) {
//     return (
//       <Eddit setIsEditing={setIsEditing} post={post} comment={comment} />
//     );
//   }

  return <HTMLRenderer text={comment.body_html} />;
}
