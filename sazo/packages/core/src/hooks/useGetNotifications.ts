import { useInfiniteQuery } from "@tanstack/react-query";

import { ApiError, NotificationPagination } from "@sazo/types";
import { infiniteFetcher } from "../utils";

export function useGetNotifications() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<NotificationPagination, ApiError>(
    [`/api/v1/notification`],
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
