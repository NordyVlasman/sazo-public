import { useState } from "react";
import { ComposerDialogActionType, useComposer } from "../../contexts/composer";
import { resizeAvatarUrl, useGetCurrentUser } from "@sazo/core";
import { UIText, useHasMounted } from "@sazo/ui";

export function ComposerFeedPrompt() {
    const { dispatch } = useComposer()
    const { data: currentUser } = useGetCurrentUser()
    const hasMounted = useHasMounted()
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    let imageUrl = resizeAvatarUrl(
        currentUser.avatar_url as string
    )

    if (hasMounted) {
        if (!dimensions.width || !dimensions.height) {
            let img = new Image()

            img.src = imageUrl
            img.onload = () => setDimensions({ width: img.width, height: img.height })
        }
    }

    return (
        <div className="items-center w-full px-4 mb-4 space-x-5 border-0 md:flex focus:ring-0 focus:border-0 bg-gray-50 p-2 rounded-xl shadow-sm ring-1 ring-black ring-opacity-5">
            <button
                onClick={() => dispatch({ type: ComposerDialogActionType.open })}
                className="flex items-center justify-between flex-1 px-1.5 py-1.5 text-black transition-shadow bg-neutral-50 rounded-full text-opacity-50"
            >
                <UIText size="text-sm" inherit>
                    {`Wat is je vraag, ${currentUser.first_name}?`}
                </UIText>
                <div className="px-2 py-1.5 hover:bg-opacity-10 text-sm font-medium text-black text-opacity-50 bg-black rounded-md bg-opacity-5">
                    Plaats bericht
                </div>
            </button>
        </div>
    )
}
