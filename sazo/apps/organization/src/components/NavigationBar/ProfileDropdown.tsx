import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import React, { forwardRef, Fragment, useState } from "react";
import { useAuth, useGetCurrentUser } from "@sazo/core";
import { Avatar, GearIcon, LogOutIcon, UIText, useHasMounted, UserCircleIcon } from "@sazo/ui";

interface LinkProps {
    children: React.ReactNode;
    href: string;
    [key: string]: any;
}

const SettingsLink = forwardRef((props: LinkProps, ref: React.ForwardedRef<HTMLAnchorElement>) => {
    let { href, children, ...rest } = props;

    return (
        <Link href={href} ref={ref} {...rest}>
            {children}
        </Link>
    )
})

SettingsLink.displayName = "SettingsLink"

export function ProfileDropdown() {
    const getCurrentUser = useGetCurrentUser()
    const { data: currentUser } = getCurrentUser
    const { logout } = useAuth()

    const hasMounted = useHasMounted()
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    return (
        <>
            <Menu as="div" className="relative">
                <Menu.Button>
                    <Avatar
                        size={36}
                        className="rounded-full flex-none h-8 w-8"
                        src={currentUser?.avatar_url}
                    />
                </Menu.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    appear
                >
                    <Menu.Items className="absolute right-0 z-30 mt-2 origin-top-right bg-white divide-y rounded-lg shadow-lg divide-neutral-100 w-52 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => logout()}
                                        className={classNames(
                                            "group flex w-full text-sm items-center rounded px-1 space-x-1 py-1",
                                            {
                                                "bg-red-100 text-red-900": active,
                                                "text-red-500": !active
                                            }
                                        )}
                                    >
                                        <LogOutIcon />
                                        <UIText inherit>Sign out</UIText>
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}
