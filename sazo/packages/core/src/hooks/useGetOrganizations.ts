import { useInfiniteQuery } from "@tanstack/react-query";
import { ApiError, OrganizationPagination, UserPagination } from "@sazo/types";
import { infiniteFetcher } from "../utils";

export function useGetOrganizations() {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status
    } = useInfiniteQuery<OrganizationPagination, ApiError>(
        [`/api/v1/organization`],
        infiniteFetcher(),
        {
            getNextPageParam: (lastPage) => lastPage.has_next && lastPage.next_cursor,
            getPreviousPageParam: (firstPage) =>
                firstPage.has_prev && firstPage.prev_cursor,
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
