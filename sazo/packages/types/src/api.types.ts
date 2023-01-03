import { User } from "./user.types";
import { Post } from "./post.types";
import { Organization } from "./organization.types";

export type ApiErrorResponse = {
    code: string;
    message: string;
}

export type Result<T, E = ApiError> = T | E;

export enum ApiErrorTypes {
    AuthenticationError = "AuthenticationError",
    ForbiddenError = "ForbiddenError",
    NotFoundError = "NotFoundError",
    UnprocessableError = "UnprocessableError",
    InternalError = "InternalError"
}

export class ApiError extends Error {
    status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;

        switch (status) {
            case 401:
                this.name = ApiErrorTypes.AuthenticationError;
                break;
            case 403:
                this.name = ApiErrorTypes.ForbiddenError;
                break;
            case 404:
                this.name = ApiErrorTypes.NotFoundError;
                break;
            case 422:
                this.name = ApiErrorTypes.UnprocessableError;
                break;
            default:
                this.name = ApiErrorTypes.InternalError;
        }
    }
}

export type PresignedResource =  "Post" | "User" | "Organization";

export type CursorPagination = {
    data: any[];

    meta: {
        next: string | null;
    };

    has_next: boolean | null;
    has_prev: boolean | null;
    next_cursor: string | null;
    prev_cursor: string | null;
    total_count: number;
}


export interface SearchResults {
  posts?: [Post];
  users?: [User]
  organizations?: [Organization]
}