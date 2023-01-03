import { useState } from "react";
import { useGetGeneralSearch } from "@sazo/core/src/hooks/useGetGeneralSearch";
import { Avatar, UIText } from "@sazo/ui";
import { AVATAR_FALLBACK } from "@sazo/configuration";
import { HTMLRenderer } from "../HTMLRenderer";

export default function NavigationSearch() {

    const [query, setQuery] = useState("");
    const searchResults = useGetGeneralSearch( query );

    return (
        <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-7">
            <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div className="w-full">
                    <label htmlFor="search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-zinc-500"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true">
                                <path fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <input
                            name="search"
                            id="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            className="block w-full rounded-md border-violet-200 bg-violet-200 py-2 pl-10 pr-3 text-sm placeholder-zinc-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-violet-700 sm:text-sm"
                            placeholder="Zoeken"
                            type="search" />
                        {searchResults.data && query ? (
                            <div className={"absolute z-30 mt-2 p-1.5 origin-top-left bg-white divide-y rounded-lg shadow-lg divide-neutral-100 w-full ring-1 ring-black ring-opacity-5 focus:outline-none"}>
                                {searchResults.data.users?.length > 0 && (
                                    <>
                                        <UIText size={"text-md"} className="px-2">Gebruikers</UIText>
                                        {searchResults.data.users.map((user) => (
                                            <div className={'relative cursor-default rounded-md py-1.5 px-2 text-gray-900'}>
                                                <div className="grid grid-cols-[20px,1fr] gap-2 items-center">
                                                    <Avatar
                                                        initials={user.full_name}
                                                        size={20}
                                                        src={user.avatar_url ? user.avatar_url : AVATAR_FALLBACK}
                                                    />
                                                    <span className={`block truncate`}>
                                                    {user.full_name}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                                {searchResults.data.posts?.length > 0 && (
                                    <>
                                        <UIText size={"text-md"} className="px-2">Posts</UIText>
                                        {searchResults.data.posts.map((post) => (
                                            <>
                                                <div className={'relative cursor-default rounded-md py-1.5 px-2 text-gray-900'}>
                                                    <HTMLRenderer text={post.description_html} />
                                                </div>
                                            </>
                                        ))}
                                    </>
                                )}

                                {searchResults.data.organizations?.length > 0 && (
                                    <>
                                        <UIText size={"text-md"} className="px-2">Organisaties</UIText>
                                        {searchResults.data.organizations.map((user) => (
                                            <>
                                                <div className={'relative cursor-default rounded-md py-1.5 px-2 text-gray-900'}>
                                                    <div className="grid grid-cols-[20px,1fr] gap-2 items-center">
                                                        <Avatar
                                                            initials={user.name}
                                                            size={20}
                                                            src={user.logo_url ? user.logo_url : AVATAR_FALLBACK}
                                                        />
                                                        <span className={`block truncate`}>
                                                    {user.name}
                                                    </span>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </>
                                )}
                            </div>
                        ) : (
                            <>
                                {query && (
                                    <div className={"absolute z-30 mt-2 origin-top-left bg-white divide-y rounded-lg shadow-lg divide-neutral-100 w-full ring-1 ring-black ring-opacity-5 focus:outline-none"}>
                                        Geen zoekresultaten gevonden
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
