import classNames from "classnames";
import Link from "next/link";
import { useGetMembers } from "@sazo/core";
import { Avatar, Title3, UIText } from "@sazo/ui";

export function MemberGridComponent() {
    const getMembers = useGetMembers()

    const members = getMembers.data?.pages.map((page) => page.data).flat(2)

    if (!members) return null

    return (
        <>
            <div className="grid flex-1 w-full grid-cols-1 gap-4 px-4 py-4 mx-auto sm:grid-cols-2 md:grid-cols-3 auto-rows-min max-w-6xl">
                {members && members.map((member) => (
                    <Link
                        href={`/people/${member.username}`}
                        key={member.id}
                        className="flex flex-col content-between transition-shadow bg-white border-0 shadow ring-1 ring-black ring-opacity-5 hover:shadow-md rounded-md"
                    >

                        <div
                            className="flex-col gap-4 justify-center pb-4 lg:justify-start lg:flex-row flex items-center -mt-6 lg:pl-4"
                        >
                            <Avatar
                                src={member.avatar_url}
                                size={96}
                                className={classNames(
                                    "rounded-full ring-[4px] w-20 h-20 lg:w-24 lg:h-24 ring-neutral-50 inline-flex"
                                )}
                            />

                            <div className="flex text-center -mt-2 lg:mt-0 lg:pt-6 lg:text-left flex-col flex-1 gap-0">
                                <Title3>{member.full_name}</Title3>
                                <UIText tertiary>{member.tagline ? member.tagline : member.username}</UIText>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}
