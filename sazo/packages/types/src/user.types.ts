import { CursorPagination } from "./api.types";
import { Organization } from "./organization.types";

export type UserRole = "developer" | "user" | "organization"

export interface User {
    username: string;
    email: string;
    id: string;
    first_name: string;
    last_name: string;
    full_name: string;
    avatar_url?: string;
    tagline?: string;
    role?: UserRole;
    user_type: number;
    organization?: number;
    has_notifications?: boolean;
}

export interface UserPagination extends CursorPagination {
    data: User[];
}
