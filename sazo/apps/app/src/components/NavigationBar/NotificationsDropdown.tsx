import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import React, { forwardRef, Fragment, useState } from "react";
import { useAuth, useGetCurrentUser, useGetNotifications, useGetPosts } from "@sazo/core";
import {
    Avatar,
    NotificationBellIcon,
    BellIcon,
    GearIcon,
    LogOutIcon,
    UIText,
    useHasMounted,
    UserCircleIcon,
    Title3,
} from "@sazo/ui";
import { AVATAR_FALLBACK } from "@sazo/configuration";

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
    );
});

SettingsLink.displayName = "SettingsLink";

export function NotificationsDropdown() {
    const { data: currentUser } = useGetCurrentUser();
    const getNotifications = useGetNotifications();

    const { isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } = getNotifications;
    let notifications = getNotifications.data?.pages.map((page) => page.data).flat(2);

    notifications = notifications?.filter((v, i, a) => a.findIndex((v2) => v2?.id === v?.id) === i);

    return (
        <>
            <Menu as="div" className="relative">
                <Menu.Button
                    className={"flex-shrink-0 rounded-full p-1 text-white hover:bg-violet-600 focus:outline-none"}
                >
                    <>
                        <span className="sr-only">View notifications</span>
                        {currentUser.has_notifications ? (
                            <NotificationBellIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        )}
                    </>
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
                    <Menu.Items className="absolute right-0 z-30 mt-2 p-1.5 origin-top-right bg-white divide-y rounded-md shadow-md divide-neutral-100 w-80 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                            <UIText size="text-lg" weight="font-medium">
                                Notificaties
                            </UIText>

                            <div className="border-t border-gray-50 py-2 grid grid-row gap-4">
                                {notifications &&
                                    notifications.map((notification) => (
                                        <Menu.Item key={notification.id}>
                                            <div className="grid grid-cols-12 gap-2">
                                                <div className="col-span-2">
                                                    <Avatar src={AVATAR_FALLBACK} size={32} />
                                                </div>
                                                <div className="col-span-7">
                                                    <UIText><span className="font-bold">Sidney buiten</span> heeft op je bericht gereageerd</UIText>
                                                </div>
                                                <div className="col-span-3">
                                                    <UIText size="text-xs" className="w-full text-end">
                                                        10 min.
                                                    </UIText>
                                                </div>
                                                <div className="col-span-2"></div>
                                                <div className="col-span-10">
                                                    <UIText size="text-xs">
                                                        Hier komt dan een preview van de reactie van max. 2 regels...
                                                    </UIText>
                                                </div>
                                            </div>
                                        </Menu.Item>
                                    ))}
                            </div>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
}
