import { useGetPosts, useGetCurrentUser } from "@sazo/core";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";
import { CommentsDialog } from "../Comment/Dialog";
import { ComposerFeedPrompt } from "../Composer/ComposerFeedPrompt";
import { FeedItem } from "./FeedItem";
import {Composer} from "../Composer";

type Props = {
    uploadable: boolean;
    queryKey: string;
}

export function Feed(props: Props) {
    const [initialAnimate, setInitialAnimate] = useState(false)
    const getPosts = useGetPosts(props.queryKey)
    const { data: currentUser } = useGetCurrentUser()

    useEffect(() => {
        if (!initialAnimate && getPosts.status === "success") {
            setInitialAnimate(true)
        }
    }, [getPosts.status, initialAnimate])

    let posts = getPosts.data?.pages.map((page) => page.data).flat(2)

    posts = posts?.filter(
        (v, i, a) => a.findIndex((v2) => v2?.id === v?.id) === i
    )

    return (
        <>
            <div className="relative flex flex-col w-full gap-5">
                <MotionConfig transition={{ duration: 1.5 }}>
                    <AnimatePresence initial={false} mode="popLayout">
                        {posts && posts.length > 0 && posts.map((post) => (
                            <motion.div
                                key={post.id}
                                layout
                                initial={
                                    initialAnimate
                                        ? { opacity: 0, scale: 0.95, translateY: -24 }
                                        : {}
                                }
                                animate={{ opacity: 1, scale: 1, translateY: 0 }}
                                exit={{ opacity: 0, scale: 0.95, translateY: -24 }}
                                transition={{
                                    opacity: { duration: 0.2 },
                                    layout: { type: "spring", bounce: 0.2 },
                                }}
                                id={`post-${post.id}`}
                                style={{ originX: 0.5 }}
                            >
                                <FeedItem post={post} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </MotionConfig>
            </div>

            {/*{!posts || (posts.length === 0 && <EmptyFeed />)}*/}

            {/*{posts && posts.length > 0 && (*/}
            {/*    <InfiniteLoader*/}
            {/*        hasNextPage={!!getPosts.hasNextPage}*/}
            {/*        isFetching={!!getPosts.isFetching}*/}
            {/*        isFetchingNextPage={!!getPosts.isFetchingNextPage}*/}
            {/*        fetchNextPage={getPosts.fetchNextPage}*/}
            {/*    />*/}
            {/*)}*/}
        </>
    )
}
