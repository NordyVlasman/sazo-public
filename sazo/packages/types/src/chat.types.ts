import { CursorPagination } from "./api.types";
import { Message } from "./message.types";
import { User } from "./user.types";

export interface Chat {
    id: string;
    public_key: string;
    latest_message: Message
    members: [User]
}

export interface ChatPagination extends CursorPagination {
    data: Chat[];
}
