import Link from "next/link";
import { useState } from "react";
import { MemberHoverCard } from "../Member/HoverCard";
import { PostDropdown } from "./PostDropdown";
import { Avatar, useHasMounted } from "@sazo/ui";
import { resizeAvatarUrl } from "@sazo/core";
import { AVATAR_FALLBACK } from "@sazo/configuration";
import { Post } from "@sazo/types";

type Props = {
    post: Post;
    isEditing: boolean;
    setIsEditing: (isEditing: boolean) => void
}

export function PostByLine(props: Props) {
    const { post, isEditing, setIsEditing } = props
    const { user } = post
    const hasMounted = useHasMounted()
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const createdAt = new Date(post.created_at).toLocaleDateString("en-US", {
        month: 'short',
        day: 'numeric'
    })

    let imageUrl = resizeAvatarUrl(
        post.user?.avatar_url as string
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
        <div className="flex items-center space-x-3">
            <MemberHoverCard username={user?.username}>
                <span>
                    <Link
                        href={`/people/${user?.username}`}
                        className="inline-flex rounded-full"
                    >
                        <Avatar
                            className="rounded-full w-10 h-10 inline-block"
                            size={44}
                            src={user?.avatar_url ? imageUrl : AVATAR_FALLBACK}
                        />
                    </Link>
                </span>
            </MemberHoverCard>
            <div className="flex items-center flex-1 space-x-2">
                <div className="flex flex-col w-full space-y-0.5">
                    <Link
                        href={`/people/${user?.username}`}
                        className="inline-flex font-medium leading-tight"
                    >
                        {user?.full_name}
                    </Link>

                    <span className="inline-flex flex-wrap items-center space-x-1 leading-tight">
                        <Link
                          href={`/people/${user?.username}`}
                          className="hover:text-neutral-600 text-neutral-400"
                        >
                            {user?.tagline ? user?.tagline : user?.email}
                        </Link>
                    </span>
                </div>

                <div className="flex items-center flex-1 space-x-2">
                    <PostDropdown
                        post={post}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                    />
                </div>
            </div>
        </div>
    )
}
