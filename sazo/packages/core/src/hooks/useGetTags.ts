import {useInfiniteQuery} from "@tanstack/react-query";
import { ApiError } from "next/dist/server/api-utils";
import { TagPagination } from "@sazo/types";
import { infiniteFetcher } from "../utils";

type Options = {
    query: string;
};

export function useGetTags(opts?: Options) {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery<TagPagination, ApiError>(
        [`/api/v1/tags`, opts?.query],
        infiniteFetcher(),
        {
            getNextPageParam: (lastPage) => lastPage.has_next && lastPage.next_cursor,
            getPreviousPageParam: (firstPage) =>
                firstPage.has_prev && firstPage.prev_cursor,
            keepPreviousData: true,
            meta: {
                limit: 10,
                query: opts?.query.replace("#", "").trim(),
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
