import { Title3 } from "@sazo/ui";

export function ProfileSidebar() {
    return (
        <div className="flex flex-col col-span-4 lg:col-span-3 md:col-span-2">
            <div className="flex items-center justify-between px-4 py-4 -mx-4 border-t border-b border-black md:mx-0 md:px-0 lg:border-t-0 border-opacity-5">
                <div className="flex items-center gap-6">
                    <Title3>Populaire onderwerpen</Title3>
                </div>
            </div>
            {/* TODO: Add some profile stuff here */}
        </div>
    )
}
