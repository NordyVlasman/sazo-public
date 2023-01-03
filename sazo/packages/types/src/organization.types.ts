import { CursorPagination } from "./api.types";

export interface Organization {
    id: string;
    name: string;
    website_url?: string;
    description?: string;
    country?: string;
    address_street_1?: string;
    address_street_2?: string;
    city?: string;
    state?: string;
    zip?: string;
    phone?: string;
    logo_url?: string;
}

export interface OrganizationPagination extends CursorPagination {
  data: Organization[];
}