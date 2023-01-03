import { CursorPagination } from "./api.types";
import { Tag } from "./tag.types";
import { User } from "./user.types";

export interface PostPagination extends CursorPagination {
    data: Post[];
}

export interface Post {
    id: string;
    created_at: string;
    description: string;
    description_html: string;
    files: PostFile[];
    tags: Tag[];
    user: User;
    comments_count: number;
    bookmarks_count: number;
    has_bookmarked: boolean;
    workarea?: string;
    career?: string;
}

export interface PostFile {
    id: string;
    file_path: string;
    url: string;
    file_type: string;
    image: boolean;
    video: boolean;
}
