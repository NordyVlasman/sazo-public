import MarkdownEditor from "../MarkdownEditor";
import {KeyboardEvent, useCallback} from "react";
import {ComposerFiles} from "./ComposerFiles";
import {ComposerTagPicker} from "./ComposerTagPicker";
import { ComposerDialogActionType, useComposer } from "../../contexts/composer";
import { useCreatePost, useGetCurrentUser, workAreas } from "@sazo/core";
import { Avatar, Button, UIText } from "@sazo/ui";
import { MemberHoverCard } from "../Member/HoverCard";
import Link from "next/link";
import { AVATAR_FALLBACK } from "@sazo/configuration";

export function Composer() {
    const { data: currentUser } = useGetCurrentUser()
    const { state, dispatch } = useComposer()
    const createPostMutation = useCreatePost()
    const { description, files, tags, workArea, career } = state

    function handleDescription(text: string) {
        dispatch({ type: ComposerDialogActionType.setDescription, payload: text })
    }

    const handleSubmit = useCallback((async (e: any) => {
        e.preventDefault()
        if (createPostMutation.isLoading) return;

        const uploadableFiles = files
            .filter((file) => !!file.key)
            .filter((file) => !file.error)
            .map((file) => ({
                file_path: file.key as string,
                file_type: file.type,
                preview_file_path: file.preview_file_path
            }))

        createPostMutation.mutate(
            {
                description,
                files: uploadableFiles,
                tags,
                career: career?.value,
                workarea: workArea?.value
            },
            {
                onSuccess: () => dispatch({ type: ComposerDialogActionType.reset })
            }
        )

    }), [description, files, createPostMutation, tags, dispatch])

    function handleCommandEnter(event: KeyboardEvent<HTMLFormElement>) {
        if (event.key === "Enter" && event.metaKey && !isDisabled) {
            handleSubmit(event)
        }
    }

    const keylessFiles = files.some((file) => !file.key);
    const isEmpty = files.length === 0 && !description;
    const isDisabled = createPostMutation.isLoading || keylessFiles || isEmpty

    return (
        <div className="relative flex flex-col flex-1">
            {createPostMutation.isLoading && (
                <div className="absolute inset-0 z-50 w-full h-full bg-black rounded-md bg-opacity-5" />
            )}
            <div className="flex items-center space-x-3 mt-2">
                <Link
                    href={`/people/${currentUser?.username}`}
                    className="inline-flex rounded-full"
                >
                    <Avatar
                        className="rounded-full w-10 h-10 inline-block"
                        size={44}
                        src={currentUser?.avatar_url ? currentUser.avatar_url : AVATAR_FALLBACK}
                    />
                </Link>
                <div className="flex items-center flex-1 space-x-2">
                    <div className="flex flex-col w-full space-y-0.5">
                        <span
                            className="inline-flex leading-tight"
                        >
                            {currentUser?.full_name}
                        </span>

                        <span className="inline-flex flex-wrap items-center space-x-1 leading-tight text-sm text-zinc-500">
                            {currentUser?.tagline ? currentUser.tagline : currentUser.email}
                        </span>
                    </div>
                </div>
            </div>

            <form
                onKeyDownCapture={handleCommandEnter}
                onSubmit={handleSubmit}
                className="flex flex-col flex-grow"
            >
                <ul role="list" className="mt-3 leading-8 space-x-2">
                    <li className="inline">
                        <button
                            onClick={() => dispatch({ type: ComposerDialogActionType.openCategorySelect }) }
                            className="relative inline-flex items-center rounded-full bg-emerald-100 px-3 py-0.5 text-sm font-medium text-emerald-900">
                            {state.career ? state.career.label : "+ Loopbaanfase" }
                        </button>
                    </li>
                    <li className="inline">
                        <button
                            onClick={() => dispatch({ type: ComposerDialogActionType.openCategorySelect }) }
                            className="relative inline-flex items-center rounded-full bg-sky-100 px-3 py-0.5 text-sm font-medium text-sky-900"
                        >
                            {state.workArea ? state.workArea.label : "+ Werkgebied" }
                        </button>
                    </li>
                </ul>
                <div className="relative z-40  mt-3 bg-white rounded-md ring-1 ring-black ring-opacity-5">
                    <div className="max-h-[500px] px-3 py-2 overflow-y-auto">
                        <MarkdownEditor
                            content={description}
                            onChange={handleDescription}
                            placeholder="Waar denk je aan?"
                            autoFocus
                        />
                    </div>
                </div>

                <ComposerFiles />

                <div className="sticky bottom-0 flex items-center justify-end pt-3 pb-3 space-x-3 rounded-b-md">
                    <Button
                        primary
                        submit
                        rounded={false}
                    >
                        Plaats bericht
                    </Button>
                </div>
            </form>
        </div>
    )
}
