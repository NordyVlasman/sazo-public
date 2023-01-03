import { useQuery } from "@tanstack/react-query";
import { ApiError } from "next/dist/server/api-utils";
import { User } from "@sazo/types";
import { apiUrl } from "../utils";

export function useGetMember(username: string) {
    return useQuery<User, ApiError>([
        apiUrl(`/api/v1/member/${username}`)
    ])
}
