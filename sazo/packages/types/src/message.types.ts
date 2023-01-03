import { CursorPagination } from "./api.types";
import { User } from "./user.types";

export interface Message {
    id: number;
    content: string;
    created_at: string;
    updated_at: string;
    author_id: number;
}

export interface MessagePagination extends CursorPagination {
    data: Message[];
}
