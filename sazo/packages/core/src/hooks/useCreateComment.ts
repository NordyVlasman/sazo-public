import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUrl, postJSON } from "../utils";

interface Props {
  body: string;
  html: string;
}

export function useCreateComment(postId: string) {
  const queryClient = useQueryClient();
  let key = `/api/v1/post/${postId}/comments`;

  return useMutation(
    async ({ ...data }: Props) => {
      return await postJSON(apiUrl(`/api/v1/post/${postId}/comments`), data);
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries([apiUrl("/api/v1/post`"), apiUrl(key)]);
      },
    }
  );
}
