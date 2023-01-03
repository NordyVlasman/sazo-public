import { useState } from "react";

export function useCopyToClipboard(): [
    (text: string) => Promise<boolean>,
    boolean
] {
    const [isCopied, setIsCopied] = useState(false);

    async function handleCopy(text: string) {
        // @ts-ignore
        if ("clipboard" in navigator) {
            // @ts-ignore
            return await navigator.clipboard.writeText(text);
        } else {
            // @ts-ignore
            return document.execCommand("copy", true, text);
        }
    }

    async function copy(text: string) {
        await handleCopy(text).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1500);
        });
        return true;
    }

    return [copy, isCopied];
}
