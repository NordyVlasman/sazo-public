import {useRouter} from "next/router";
import {useEffect} from "react";
import classNames from "classnames";
import {MotionConfig} from "framer-motion";
import { CommentsList } from "./CommentsList";
import { useGetComments, useGetPost } from "@sazo/core";
import { CommentsDialogActionType, useCommentsDialog } from "../../contexts/comments";
import { ChatBubbleIcon, Dialog, DotsHorizontal, LoadingSpinner, UIText } from "@sazo/ui";
import { CommentComposer } from "./CommentComposer";

export function CommentsDialog() {
    const { state, dispatch } = useCommentsDialog()
    const router = useRouter();

    useGetPost(state.post?.id as string);

    const getComments = useGetComments(state.post?.id);
    const { isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
        getComments;
    let comments = getComments.data?.pages.map((page) => page.data).flat(2);

    comments = comments?.filter(
        (v, i, a) => a.findIndex((v2) => v2?.id === v?.id) === i
    );

    const sz = "scroll-zone";

    function onCommentCreated() {
        // wait one render tick so that the optimistic comment is rendered first
        setTimeout(() => {
            scrollToBottom("smooth");
        }, 1);
    }

    useEffect(() => {
        if (state.post && getComments.status === "success") {
            setTimeout(() => {
                scrollToBottom("auto");
            }, 400);
        }
    }, [state.post, getComments.status])

    function scrollToBottom(behavior: "smooth" | "auto") {
        const scrollzone = document.getElementById(sz);

        scrollzone?.scrollTo({
            top: scrollzone?.scrollHeight,
            behavior,
        });
    }

    useEffect(() => {
        function handleRouteChange() {
            dispatch({ type: CommentsDialogActionType.close });
        }

        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router, dispatch]);

    return (
        <Dialog
            isVisible={!!state.post}
            setIsVisible={() => {
                dispatch({ type: CommentsDialogActionType.close });
            }}
            title="Comments"
            width="max-w-3xl"
        >
            <div className="flex flex-col max-h-[calc(70vh)] sm:min-h-[30vh] lg:max-h-[70vh]">
                <div className="flex items-center justify-center w-full px-4 py-3 space-x-2 bg-white border-b border-black rounded-t-2xl border-opacity-10">
                    <ChatBubbleIcon />
                    <UIText size="text-sm" weight="font-semibold">
                        Comments
                    </UIText>
                </div>

                {state.post && (
                    <>
                        {!getComments.data && getComments.isFetching && (
                            <div className="flex items-center justify-center flex-1 py-16 text-center">
                                <LoadingSpinner />
                            </div>
                        )}

                        <div
                            className={classNames("px-4 flex-1 overflow-y-auto", {
                                "py-2": comments && comments.length > 0,
                            })}
                            id={sz}
                        >
                            {hasNextPage && (
                                <button
                                    disabled={isFetching || isFetchingNextPage}
                                    onClick={() => fetchNextPage()}
                                    className="mb-6"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full bg-opacity-5">
                                            <DotsHorizontal />
                                        </div>
                                        <UIText tertiary>
                                            Showing the last {comments?.length} of {getComments.total}{" "}
                                            comments
                                        </UIText>
                                        <UIText className="text-blue-500">Show previous</UIText>
                                    </div>
                                </button>
                            )}

                            <MotionConfig transition={{ duration: 0.3 }}>
                                <CommentsList post={state.post} comments={comments} />
                            </MotionConfig>
                        </div>

                        <div className="px-3 py-3 border-t border-black rounded-b-2xl bg-neutral-50 border-opacity-10">
                            <CommentComposer
                                onCommentCreated={onCommentCreated}
                                post={state.post}
                            />
                        </div>
                    </>
                )}
            </div>
        </Dialog>
    )
}
