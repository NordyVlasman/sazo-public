import { CursorPagination } from "./api.types";
import { User } from "./user.types";

export interface Comment {
    id: string;
    created_at: string;
    file_id: string | null;
    url: string;
    body: string;
    body_html: string;
    user: User;
}

export interface CommentsPagination extends CursorPagination {
    data: Comment[];
}
