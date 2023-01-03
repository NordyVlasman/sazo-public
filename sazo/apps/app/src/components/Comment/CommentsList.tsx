import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { CommentComponent } from "./Comment";
import { Post, Comment } from "@sazo/types";

type Props = {
    comments: Comment[] | undefined;
    post: Post;
};

export function CommentsList({ comments = [], post }: Props) {
    useEffect(() => {
        const hash = window?.location.hash;

        if (hash) {
            const el = document.getElementById(hash);

            if (el) {
                el.classList.add("bg-amber-100");
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                    history.pushState(
                        "",
                        document.title,
                        window.location.pathname + window.location.search
                    );
                }, 400);
                setTimeout(() => {
                    el.classList.add("bg-opacity-0");
                }, 3000);
            }
        }
    }, [comments]);

    return (
        <div className="flex flex-col-reverse w-full">
            <AnimatePresence initial={false}>
                {comments.map((comment) => {
                    if (!comment) return;

                    return (
                        <motion.div
                            key={comment.created_at}
                            layout
                            initial={{ opacity: 0, scale: 0.98, translateY: 8 }}
                            animate={{ opacity: 1, scale: 1, translateY: 0 }}
                            exit={{ opacity: 0, scale: 0.98, translateY: 8 }}
                            transition={{
                                layout: { type: "spring", bounce: 0.2, duration: 0.3 },
                            }}
                            style={{ originX: 0.5 }}
                        >
                            <div
                                id={`#comment-${comment.id}`}
                                className="flex p-2 -mx-2 transition-colors duration-300 rounded-lg scroll-mt-32 max-w-full"
                            >
                                <CommentComponent post={post} comment={comment} />
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}
