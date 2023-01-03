import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUrl, postJSON } from "../utils";


export interface CreatePostProps {
    description: string;
    files: {
        file_path: string;
        file_type: string;
        preview_file_path: string | null
    }[];
    career?: string;
    workarea?: string;
    tags: string[];
}

export function useCreatePost() {
    const queryClient = useQueryClient()

    return useMutation(
        async (data: CreatePostProps) => {
            return await postJSON(apiUrl(`/api/v1/post`), data)
        },
        {
            onSuccess: (result) => {
                queryClient.invalidateQueries(['/api/v1/post'])
            },
            onError: (error: any) => {
                toast.error(error.message)
            }
        }
    )
}
