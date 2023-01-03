import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetUsername } from "./useGetUsername";
import { apiUrl, deleteJSON } from "../utils";

type Props = {
    id: string;
}

export function useDeletePost() {
    const username = useGetUsername()
    const queryClient = useQueryClient()

    return useMutation(
        async ({ id }: Props) => {
            return await deleteJSON(
                apiUrl(`/api/v1/post/${id}`)
            )
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries([`/api/v1/post`])
            }
        }
    )
}
