import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUrl, putJSON } from "../utils";

type UpdateUserProps = {
    avatar_path?: string | null;
    email?: string;
    first_name?: string;
    last_name?: string;
    username?: string;
    tagline?: string;
};

export function useUpdateCurrentUser() {
    const queryClient = useQueryClient()

    return useMutation(
        async (data: UpdateUserProps) => {
            return await putJSON(apiUrl("/api/v1/member"), data)
        },
        {
            onSuccess: (data) => {
                queryClient.setQueryData([apiUrl("/api/v1/me")], data)
            }
        }
    )
}
