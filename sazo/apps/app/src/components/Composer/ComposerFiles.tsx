import { ComposerReorderableFiles } from "./ComposerReorderableFiles";
import { PicturePlusIcon, UIText } from "@sazo/ui";
import { useComposer } from "../../contexts/composer";

export function ComposerFiles() {
    const { state, dropzone } = useComposer()
    const { open } = dropzone
    const { files } = state

    return (
        <>
            {files.length > 0 && (
                <div className="p-3">
                    {files.length < 10 && (
                        <div className="w-full mb-3" onClick={() => open()}>
                            <button
                                type="button"
                                className="flex items-center w-full py-0.5 font-mono text-center transition-all bg-black flex-center rounded-xl bg-opacity-5 ring-1 ring-black ring-opacity-10 hover:bg-white hover:bg-opacity-80 hover:shadow hover:ring-opacity-5"
                            >
                                <div className="flex items-center justify-center w-10 h-10 text-black text-opacity-50">
                                    <PicturePlusIcon />
                                </div>
                                <UIText tertiary size='text-xs'>
                                    Voeg meer toe
                                </UIText>
                            </button>
                        </div>
                    )}

                    <ComposerReorderableFiles files={files} />
                </div>
            )}

            {files.length === 0 && (
                <div className="w-full py-2" onClick={() => open()}>
                    <button
                        type="button"
                        className="flex flex-col items-center justify-center w-full p-4 text-center transition-all bg-black rounded-md bg-opacity-5 ring-1 ring-black ring-opacity-10 hover:bg-white hover:bg-opacity-80 hover:shadow hover:ring-opacity-5"
                    >
                        <PicturePlusIcon />
                        <UIText weight="font-medium" className="mt-2 mb-1">
                            Voeg maximaal <span className="font-bold">5</span> bestanden toe
                        </UIText>
                        <UIText tertiary>Drag + Drop / Copy + Paste</UIText>
                    </button>
                </div>
            )}
        </>
    )
}
