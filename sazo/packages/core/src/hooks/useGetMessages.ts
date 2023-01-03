import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { ApiError, Chat, ChatPagination, CommentsPagination, Message } from "@sazo/types";
import { apiUrl, infiniteFetcher } from "../utils";


export function useGetMessages(chatId: string | undefined) {
    return useQuery<[Message], ApiError>(
      [apiUrl(`/api/v1/chats/${chatId}/messages`)]
    )
}
