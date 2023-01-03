import {useInfiniteQuery} from "@tanstack/react-query";
import { ApiError } from "next/dist/server/api-utils";
import { PostPagination } from "@sazo/types";
import { infiniteFetcher } from "../utils";

export function useGetPosts(queryKey: string) {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery<PostPagination, ApiError>(
        [queryKey],
        infiniteFetcher(),
        {
            getNextPageParam: (lastPage) => lastPage.has_next && lastPage.next_cursor,
            getPreviousPageParam: (firstPage) =>
                firstPage.has_prev && firstPage.prev_cursor,
            meta: {
                limit: "5",
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
    }
}
