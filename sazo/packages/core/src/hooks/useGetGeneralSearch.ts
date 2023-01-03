import {useQuery} from "@tanstack/react-query";
import { ApiError, Post, SearchResults } from "@sazo/types";
import {apiUrl} from "../utils";

export function useGetGeneralSearch(search: string) {
  const paramsString = `search=${search}`;
  const searchParams = new URLSearchParams(paramsString);

  return useQuery<SearchResults, ApiError>(
    [apiUrl("/api/search",
      searchParams
    )],
  )
}