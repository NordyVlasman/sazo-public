import { LoadingSpinner } from "@sazo/ui";

export function FullPageLoading() {
    return (
        <div className="relative flex items-center self-center justify-center flex-1 w-full">
            <LoadingSpinner />
        </div>
    )
}
