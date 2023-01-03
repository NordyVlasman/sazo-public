import {useEffect} from "react";
import { useIntersection } from "@sazo/core";
import { LoadingSpinner } from "@sazo/ui";

type Props = {
    hasNextPage: boolean;
    isFetching: boolean;
    isFetchingNextPage: boolean;
    fetchNextPage: () => void;
}

export function InfiniteLoader(props: Props) {
    const [intersecting, ref] = useIntersection<HTMLDivElement>()

    const { isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } = props

    useEffect(() => {
        if (intersecting && !isFetching && !isFetchingNextPage && hasNextPage) {
            fetchNextPage()
        }
    }, [intersecting])

    if (!hasNextPage) return "hoi"

    return (
        <>
            <div className="relative flex items-center justify-center w-full p-14">
                <div className="absolute -top-11" ref={ref}></div>
                <LoadingSpinner />
            </div>
        </>
    )
}