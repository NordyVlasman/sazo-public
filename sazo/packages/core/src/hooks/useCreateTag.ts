import {useMutation, useQueryClient} from "@tanstack/react-query";
import { apiUrl, postJSON } from "../utils";

type CreateTagProps = {
    name: string;
}

export function useCreateTag() {
    const queryClient = useQueryClient();

    return useMutation(
        async (data: CreateTagProps) => {
            return await postJSON(apiUrl(`/api/v1/tags`), data);
        },
        {
            onSuccess: async () => {
                queryClient.invalidateQueries([`/api/v1/tags`]);
            },
        }
    );
}
