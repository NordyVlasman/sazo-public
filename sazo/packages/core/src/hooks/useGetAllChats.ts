import { useInfiniteQuery } from "@tanstack/react-query";

import { ApiError, ChatPagination, CommentsPagination } from "@sazo/types";
import { infiniteFetcher } from "../utils";


export function useGetAllChats() {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery<ChatPagination, ApiError>(
        [`/api/v1/chats`],
        infiniteFetcher(),
        {
            refetchOnWindowFocus: false,
            getNextPageParam: (lastPage) => lastPage.has_next && lastPage.next_cursor,
            getPreviousPageParam: (firstPage) =>
                firstPage.has_prev && firstPage.prev_cursor,
            meta: {
                limit: "10",
            },
        }
    );

    return {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
        total: data?.pages?.slice(-1)?.[0]?.total_count,
    };
}
