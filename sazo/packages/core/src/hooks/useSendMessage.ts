import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUrl, postJSON } from "../utils";

type SendMessageProps = {
  message: string;
};

export function useSendMessage(chatId: string) {
  const queryClient = useQueryClient();

  return useMutation(
    async (data: SendMessageProps) => {
      return await postJSON(apiUrl(`/api/v1/chats/${chatId}/messages`), data);
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries([`/api/v1/chats/${chatId}/messages`]);
      },
    }
  );
}
