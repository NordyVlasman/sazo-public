import { CursorPagination } from "./api.types";

export interface Tag {
    id: string;
    name: string;
    post_count?: number;
}

export interface TagPagination extends CursorPagination {
    data: Tag[];
}
