import Link from "next/link";
import { Post, Tag } from "@sazo/types";

type Props = {
    post: Post;
}

export function PostTags(props: Props) {
    const { post } = props;
    const { tags} = post;

    const hasTags = tags && tags.length > 0;

    if (!hasTags) return null;

    return (
        <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
                <TagPill tag={tag} key={tag.name} />
            ))}
        </div>
    )
}

function TagPill({ tag }: { tag: Tag }) {

    return (
        <Link href={`/tags/${tag.name}`} legacyBehavior>
            <a className="px-2.5 ring-1 ring-violet-500 ring-opacity-10 hover:ring-opacity-[0.25] inline-flex items-center py-0.5 text-violet-900 text-xs bg-violet-100 rounded-full hover:bg-violet-200">
                {tag.name}
            </a>
        </Link>
    )
}
