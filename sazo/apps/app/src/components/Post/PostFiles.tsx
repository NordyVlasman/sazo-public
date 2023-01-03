import Link from "next/link";
import { useRouter } from "next/router";
import { ImageAttachment } from "../Renderers/FeedImageRenderer";
import { Post } from "@sazo/types";

interface Props {
    post: Post
}

export function Files(props: Props) {
    const { post } = props
    const { files } = post
    const router = useRouter()

    if (!files || files.length === 0) return null

    function getRows() {
        if (files.length === 1) return "grid-rows-1";
        return "grid-rows-[repeat(2,_auto))]";
    }

    function getCols() {
        if (files.length === 1) return "grid-cols-1";
        if (files.length === 2) return "grid-cols-2";
        if (files.length === 3) return "grid-cols-2";
        if (files.length === 4) return "grid-cols-3";
        if (files.length > 4) return "grid-cols-4";
    }

    function getFirstOfTypeSpan() {
        if (files.length === 1) return "first:col-span-1";
        if (files.length === 3) return "first:col-span-2";
        if (files.length === 4) return "first:col-span-3";
        if (files.length > 4) return "first:col-span-4";
    }

    return (
        <div className={`grid ${getCols()} ${getRows()} gap-2`}>
            {files.map((file, index) => {
                if (file.file_path) {
                    return (
                        <Link
                            key={file.id}
                            scroll={false}
                            shallow={false}
                            href={{
                                pathname: router.pathname,
                                query: { ...router.query, postId: post.id, fileId: file.id}
                             }}
                             className={`max-h-[680px] w-auto h-auto relative inline-flex items-center justify-center overflow-hidden bg-black border border-black rounded-lg bg-opacity-5 ${getFirstOfTypeSpan()} border-opacity-[0.02]`}
                        >
                            <ImageAttachment
                                file={file}
                                index={index}
                                numFiles={files.length}
                                width={index === 0 ? 680 :338}
                            />
                        </Link>
                    )
                }
            })}
        </div>
    )
}
