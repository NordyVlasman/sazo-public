import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import Link from "next/link";
import { ProfileDropdown } from "./ProfileDropdown";
import { BellIcon, Logo } from "@sazo/ui";
import { useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from 'framer-motion'

export function NavigationBar() {
    const router = useRouter()
    let [hoveredIndex, setHoveredIndex] = useState(null)

    const navLinks = [
        {
            label: "Settings",
            href: `/`,
            active: router.pathname === `/`,
        },
    ]

    return (
        <>
            <OuterContainer>
                <InnerContainer>
                    <div className="flex items-center">
                        <Link href={"/"} legacyBehavior>
                            <a href="" className="flex items-center flex-none h-full text-sm font-medium text-black">
                                <Logo mode={"dark"}/>
                            </a>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-5 justify-self-center">
                        {navLinks.map((link, index) => (
                            <Link
                                href={"/organization/settings"}
                                className="relative -my-2 -mx-3 rounded-md px-3 py-1.5 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.span
                                            className="absolute inset-0 rounded-md bg-gray-100"
                                            layoutId="hoverBackground"
                                            initial={{
                                                opacity: 0
                                            }}
                                            animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                            exit={{
                                                opacity: 0,
                                                transition: { duration: 0.15, delay: 0.2 },
                                            }}
                                        />
                                    )}
                                </AnimatePresence>
                                { link.active && (
                                    <span className="absolute inset-0 rounded-md bg-gray-100/95"></span>
                                )}
                                <span className="relative z-10">{link.label}</span>
                            </Link>
                        ))}
                    </div>

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
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    const isDevelopment = process.env.NODE_ENV === "development";

    return (
        <div
            className={classNames("sticky top-0 z-40 flex-none flex h-14 bg-white", {
                "border-b border-orange-500": isDevelopment,
                "border-b border-neutral-200": !isDevelopment,
                "after:content-['Development'] after:-translate-x-1/2 after:rounded-b-md after:bg-orange-500 after:text-white after:absolute after:left-1/2 after:px-2 after:-bottom-[17px] after:uppercase after:font-medium after:text-[11px]":
                isDevelopment,
            })}
            {...props}
        />
    );
}

function InnerContainer(props: Props) {
    return (
        <div
            className="grid items-center justify-between w-full grid-cols-3 px-4 mx-auto max-w-5xl"
            {...props}
        />
    )
}

function ProfileBlock() {
    return (
        <>
            <div className="flex items-center gap-2 justify-self-end">
                <ProfileDropdown />
            </div>
        </>
    )
}
