import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Post } from "@sazo/types";
import { apiUrl, deleteJSON } from "../utils";

type Data = {
    id: string;
}

export function useRemovePostBookmark() {
    const queryClient = useQueryClient();

    return useMutation(
        async (data: Data) => {
            return await deleteJSON(
                apiUrl(`/api/v1/post/${data.id}/bookmark`),
            );
        },
        {
            onSuccess: (result) => {
                const post = result as Post

                toast.success("Bookmark removed");

                queryClient.invalidateQueries([
                    `/api/v1/post`,
                ]);
            },
            onError: (error: any) => {
                toast.error(error.message);
            }
        }
    )
}
