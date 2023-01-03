import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUrl, postJSON } from "../utils";
import { Post } from "@sazo/types";

type Data = {
    id: string;
}

export function useBookmarkPost() {
    const queryClient = useQueryClient();

    return useMutation(
        async (data: Data) => {
            return await postJSON(
                apiUrl(`/api/v1/post/${data.id}/bookmark`),
            );
        },
        {
            onSuccess: (result) => {
                const posst = result as Post

                toast.success("Post bookmarked");

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
