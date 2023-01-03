import { QueryCache, QueryClient, QueryFunctionContext } from "@tanstack/react-query";

import {getCookie} from "cookies-next";
import {ApiError, ApiErrorResponse, Result} from "@sazo/types";
import {API_SECRET, LARAVEL_API_URL, WEB_URL} from "@sazo/configuration";

export function apiUrl(path: string, params?: URLSearchParams): string {
  const url = new URL(LARAVEL_API_URL);

  url.pathname = path;
  if (params) {
    params.forEach((value, key) => {
      url.searchParams.append(key, value as string);
    });
  }

  return url.toString();
}

export function postJSON<T>(url: string, body?: unknown): Promise<Result<T>> {
  return fetcher<T>(url, { method: "POST", body });
}

export function putJSON<T>(url: string, body?: unknown): Promise<Result<T>> {
  return fetcher<T>(url, { method: "PUT", body });
}

export function deleteJSON<T>(url: string): Promise<Result<T>> {
  return fetcher<T>(url, { method: "DELETE" });
}

type Method = "DELETE" | "POST" | "PUT";

const ApiCookieName = "sazo_session";

type FetcherProps = {
  method?: Method;
  body?: unknown;
  cookies?: Record<string, string>;
};

export async function fetcher<T>(
  url: string,
  { method, body, cookies }: FetcherProps | undefined = {}
): Promise<Result<T>> {
  try {
    // @ts-ignore
    let headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
      'X-Requested-With': 'XMLHttpRequest',
      'X-API-SECRET': API_SECRET,
    });

    let credentials: RequestCredentials | undefined;

    if (cookies) {
      const accessToken = cookies['access_token'];
      headers.append("Authorization", `Bearer ${accessToken}`)
    } else {
      // @ts-ignore
      headers.append("Authorization", `Bearer ${getCookie('access_token')}`)
    }

    const resp = await fetch(url, {
      method: method ? method : "GET",
      body: body ? JSON.stringify(body) : undefined,
      headers: headers,
    })

    if (resp.ok) {
      return resp.json();
    } else {
      const body: ApiErrorResponse = await resp.json();

      throw new ApiError(resp.status, body.message);
    }
  } catch (e) {
    throw e;

  }
}

const PAGINATION_LIMIT = "25";

export const infiniteFetcher =
  (cookies?: Record<string, string>) =>
    ({
       queryKey: [path],
       pageParam = null,
       meta,
     }: QueryFunctionContext): Promise<any> => {
      const searchParams = new URLSearchParams();

      searchParams.set("limit", PAGINATION_LIMIT);
      if (pageParam) {
        searchParams.set("after", pageParam);
      }
      if (meta?.limit) {
        searchParams.set("limit", meta.limit as string);
      }
      if (meta?.query) {
        searchParams.set("q", meta.query as string);
      }
      if (meta?.filter) {
        searchParams.set("filter", meta.filter as string);
      }

      return fetcher(apiUrl(path as string, searchParams), { cookies });
    };

export const queryClient = (cookies?: Record<string, string>) =>
  new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: async ({ queryKey: [url] }) => {
          if (typeof url === "string") return fetcher(url, { cookies });

          throw new Error("Invalid QueryKey");
        },
      },
    },
  });
