import { useQuery } from "@tanstack/react-query";
import { ApiError } from "next/dist/server/api-utils";
import { Organization, User } from "@sazo/types";
import { apiUrl } from "../utils";

export function useGetOrganization(organization: number|string) {
  return useQuery<Organization, ApiError>([
    apiUrl(`/api/v1/organization/${organization}`)
  ])
}
