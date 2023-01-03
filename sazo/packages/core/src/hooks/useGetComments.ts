import { useInfiniteQuery } from "@tanstack/react-query";

import { ApiError, CommentsPagination } from "@sazo/types";
import { infiniteFetcher } from "../utils";


export function useGetComments(postId: string | undefined) {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery<CommentsPagination, ApiError>(
        [`/api/v1/post/${postId}/comments`, postId],
        infiniteFetcher(),
        {
            refetchOnWindowFocus: false,
            enabled: !!postId,
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
