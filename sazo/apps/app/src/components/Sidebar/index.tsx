import { BookmarkIcon, Button, ChatBubbleIcon, PencilIcon, UIText } from "@sazo/ui";
import { ComposerDialogActionType, useComposer } from "../../contexts/composer";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/20/solid";
import { careerCategories, workAreas } from "@sazo/core";
import { QuestionMarkCircleIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

interface Props {
    uploadable?: boolean
}

export default function Sidebar({ uploadable = false }: Props) {
    const { dispatch } = useComposer()

    const items = [
        ...careerCategories.slice(0, 2),
        ...workAreas.slice(0, 2)
    ]

    return (
        <div className="sticky top-4 space-y-6">
            <div className="mt-6">
                {uploadable && (
                    <Button
                        leadingIcon={<PencilIcon />}
                        primary
                        fullWidth
                        onClick={() => dispatch({ type: ComposerDialogActionType.open}) }
                    >
                        Nieuwe vraag stellen
                    </Button>
                )}
            </div>
            <UIText size="text-lg mt-4" weight="font-medium">
                Voor jou
            </UIText>
            <nav aria-label="Sidebar" className="divide-y space-y-6 divide-gray-300">
                <div className="flex flex-col gap-2.5 mt-2">
                    {items.map((item, index) => {
                        return (
                            <div className="flex-initial" key={item.value}>
                                <span className="inline-flex items-center bg-gray-100 rounded-full w-auto px-2.5 py-1 border border-gray-300 text-sm font-medium text-gray-500">
                                    {item.label}
                                </span>
                            </div>
                        )
                    })}
                </div>

                <div className="space-y-1 pt-3">
                    <Link
                        href="/me/bookmarks"
                        className={'text-zinc-700 flex items-center py-2 text-sm font-medium rounded-md'}
                    >
                        <BookmarkIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-zinc-700" />
                        <UIText inherit weight={"font-medium"}>Opgeslagen berichten</UIText>
                    </Link>

                    <Link
                        href="/organizations"
                        className={'text-zinc-700 flex items-center py-2 text-sm font-medium rounded-md'}
                    >
                        <GlobeAltIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-zinc-700" />
                        <UIText inherit weight={"font-medium"}>Organisaties</UIText>
                    </Link>

                    <Link
                        href="/help"
                        className={'text-zinc-700 flex items-center py-2 text-sm font-medium rounded-md'}
                    >
                        <QuestionMarkCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-zinc-700" />
                        <UIText inherit weight={"font-medium"}>Help</UIText>
                    </Link>

                    <Link
                        href="/chat"
                        className={'text-zinc-700 flex items-center py-2 text-sm font-medium rounded-md'}
                    >
                        <ChatBubbleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-zinc-700" />
                        <UIText inherit weight={"font-medium"}>Chat</UIText>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
