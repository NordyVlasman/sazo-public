import { useQuery } from "@tanstack/react-query";
import { ApiError, User } from "@sazo/types";
import { apiUrl } from "../utils";

export function useGetOrganizationMembers(organization: string) {
  return useQuery<User[], ApiError>([
    apiUrl(`/api/v1/organization/${organization}/members`)
  ])
}
