import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import Link from "next/link";
import { ProfileDropdown } from "./ProfileDropdown";
import { BellIcon, Logo } from "@sazo/ui";
import { NotificationsDropdown } from "./NotificationsDropdown";
import NavigationSearch from "../Search/NavigationSearch";

export function NavigationBar() {
    return (
        <>
            <OuterContainer>
                <InnerContainer>
                    <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/">
                                <Logo />
                            </Link>
                        </div>
                    </div>
                    <NavigationSearch />
                    <ProfileBlock />
                </InnerContainer>
            </OuterContainer>
        </>

    )
}

type Props = {
    children: React.ReactNode;
}

function OuterContainer(props: Props) {
    return (
      <div
        className={classNames("bg-violet-500 shadow-sm lg:static lg:overflow-y-visible"
        )}
        {...props}
      />
    );
}

function InnerContainer(props: Props) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12" {...props} />
        </div>
    )
}

function ProfileBlock() {
    return (
        <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-3">
            <NotificationsDropdown />
            <div className="relative ml-4 flex-shrink-0 mt-1">
                <ProfileDropdown />
            </div>
        </div>
    )
}
