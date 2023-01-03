import {useQuery} from "@tanstack/react-query";
import {ApiError, Post} from "@sazo/types";
import {apiUrl} from "../utils";

export function useGetPost(id: string) {
  return useQuery<Post, ApiError>(
    [apiUrl(`/api/v1/post/${id}`)],
    {
      enabled: !!id,
    }
  )
}