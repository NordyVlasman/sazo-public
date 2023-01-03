import { useQuery } from "@tanstack/react-query";
import { ApiError } from "next/dist/server/api-utils";
import { User } from "@sazo/types";
import { apiUrl } from "../utils";

export function useGetCurrentUser() {
    const query = useQuery<User, ApiError>([apiUrl("/api/v1/me")], {
        staleTime: Infinity,
        cacheTime: Infinity,
    })

    return query;
}
