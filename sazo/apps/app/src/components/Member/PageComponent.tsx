import classNames from "classnames";
import { Feed } from "../Feed";
import { ProfileHeader } from "../Profile/ProfileHeader";
import { ProfileSidebar } from "../Profile/ProfileSidebar";
import { careerCategories, useGetCurrentUser, useGetMember, useGetUsername, workAreas } from "@sazo/core";
import { User } from "@sazo/types";
import { Avatar, BookmarkIcon, Button, LargeTitle, PencilIcon, Title2, Title3, UIText } from "@sazo/ui";
import { FullPageLoading } from "../Loaders/FullPageLoading";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import {AnimatePresence, motion} from "framer-motion";
import { GlobeAltIcon, UsersIcon } from "@heroicons/react/20/solid";
import { AVATAR_FALLBACK } from "@sazo/configuration";
import Sidebar from "../Sidebar";

export function MemberPageComponent() {
    const router = useRouter()
    const username = useGetUsername()
    const { data: currentUser } = useGetCurrentUser()
    const getMember = useGetMember(username as string)
    let [hoveredIndex, setHoveredIndex] = useState(null)
    let [isFeed, setIsFeed] = useState(true)

    const member = getMember.data as User
    const currentUserIsMember = currentUser?.username === member.username

    if (!member) <FullPageLoading />

    const items = [
        ...careerCategories.slice(0, 2),
        ...workAreas.slice(0, 2)
    ]

    const navLinks = [
        {
            label: "Berichten",
            action: () => setIsFeed(true),
            active: isFeed
        },
        {
            label: "Reacties",
            action: () => setIsFeed(false),
            active: !isFeed
        }
    ]


    return (
        <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            <main className="lg:col-span-9 xl:col-span-9">
                <ProfileHeader>
                    <div className={classNames("flex-col justify-center lg:justify-start lg:flex-row flex gap-4")}>
                        <Avatar
                            src={member.avatar_url ? member.avatar_url : AVATAR_FALLBACK}
                            size={64}
                            className={classNames("rounded-full w-18 h-18 lg:w-18 lg:h-18")}
                        />

                        <div className="flex text-center lg:text-left flex-col flex-1">
                            <LargeTitle>{member.full_name}</LargeTitle>
                            <Title3 tertiary weight="font-medium">{member.tagline}</Title3>
                        </div>

                        {currentUserIsMember && (
                            <Button url="/me/settings" primary leadingIcon={<PencilIcon size={21} />}>
                                Bewerk
                            </Button>
                        )}
                    </div>
                </ProfileHeader>

                <div className="flex w-full -mx-2">
                    {navLinks.map((link, index) => (
                        <button
                            key={link.label}
                            onClick={link.action}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={classNames(
                                "px-2 py-3 text-sm text-black -mb-px relative before:content-[''] before:block before:absolute before:h-0 before:bottom-0 before:border-b-2 before:border-black before:left-4 before:right-4",
                                {
                                    "text-opacity-100 before:h-0 before:bottom-0 border-opacity-100 before:border-opacity-100": link.active,
                                    "text-opacity-50 hover:text-opacity-80 before:border-opacity-0": !link.active,
                                }
                            )}
                        >
                            <span className="relative rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]">
                                <AnimatePresence>
                                    {hoveredIndex === index && !link.active && (
                                        <motion.span
                                            className="absolute inset-0 rounded-lg bg-gray-100"
                                            layoutId="hoverBackground"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                            exit={{
                                                opacity: 0,
                                                transition: { duration: 0.15, delay: 0.2 },
                                            }}
                                        />
                                    )}
                                </AnimatePresence>
                                <span className="relative z-10">{link.label}</span>
                            </span>
                        </button>
                    ))}
                </div>

                <div>
                    {isFeed ? (
                        <Feed
                            uploadable={false}
                            queryKey={`/api/v1/feed/member/${username}`}
                        />
                    ) : (
                        <>
                        </>
                    )}
                </div>
            </main>
            <aside className="hidden xl:col-span-3 xl:block">
                <Sidebar />
            </aside>
        </div>
    )
}
