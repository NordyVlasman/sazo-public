import { useState } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import Link from "next/link";
import { resizeAvatarUrl, useGetMember } from "@sazo/core";
import { Avatar, LoadingSpinner, UIText, useHasMounted } from "@sazo/ui";
import { AVATAR_FALLBACK } from "@sazo/configuration";

type Props = {
    children: React.ReactNode;
    username: string;
}

export function MemberHoverCard({ children, username }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const getMember = useGetMember(username);

    const hasMounted = useHasMounted();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    let imageUrl = resizeAvatarUrl(
        getMember.data?.avatar_url as string
    )

    if (hasMounted && imageUrl) {
        if (!dimensions.width || !dimensions.height) {
            let img = new Image();

            img.src = imageUrl;
            img.onload = () =>
                setDimensions({ width: img.width, height: img.height });
        }
    }

    return (
        <HoverCard.Root openDelay={200} onOpenChange={setIsOpen}>
            <HoverCard.Trigger asChild>{ children }</HoverCard.Trigger>

            <HoverCard.Portal>
                <HoverCard.Content className="p-3 w-auto z-10 min-w-[256px] max-w-[256px] bg-white shadow-xl rounded-xl">
                    {!getMember.data ? (
                        <div className="flex items-center justify-center p-6">
                            <LoadingSpinner />
                        </div>
                    ) : (
                        <>
                            <div className="flex rounded-full">
                                <Avatar
                                    src={getMember.data?.avatar_url ? imageUrl : AVATAR_FALLBACK}
                                    className="rounded-full flex-none grid-none"
                                    size={32}
                                />
                            </div>
                            <div className="grid grid-cols">
                                <div className="flex flex-col mt-2">
                                    <Link href={`/members/${getMember.data.username}`} className="inline-flex">
                                        <UIText size="text-md" weight="font-medium" className="w-auto break-all truncate">
                                            {getMember.data.full_name}
                                        </UIText>
                                    </Link>
                                    {getMember.data?.tagline && (
                                        <UIText tertiary>{getMember.data.tagline}</UIText>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    )
}
