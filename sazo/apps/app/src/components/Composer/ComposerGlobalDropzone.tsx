import {useEffect, useRef} from "react";
import { useComposer } from "../../contexts/composer";
import { PicturePlusIcon, UIText } from "@sazo/ui";

export function ComposerGlobalDropzone() {
    const { dropzone } = useComposer();
    const { getRootProps, getInputProps } = dropzone;
    const dropzoneRef = useRef<HTMLDivElement>(null);

    function showDropZone() {
        const dz = dropzoneRef.current;

        if (dz) {
            dz.classList.add("visible");
            dz.classList.remove("invisible");
        }
    }

    function allowDrag(e: any) {
        if (true) {
            // Test that the item being dragged is a valid one
            e.dataTransfer.dropEffect = "copy";
            e.preventDefault();
        }
    }

    function hideDropZone() {
        const dz = dropzoneRef.current;

        if (dz) {
            dz.classList.remove("visible");
            dz.classList.add("invisible");
        }
    }

    function handleDrop(e: DragEvent) {
        e.preventDefault();
        hideDropZone();
    }

    useEffect(() => {
        const dz = dropzoneRef.current;

        window.addEventListener("dragenter", showDropZone);

        dz?.addEventListener("dragleave", hideDropZone);
        dz?.addEventListener("dragenter", allowDrag);
        dz?.addEventListener("dragover", allowDrag);
        dz?.addEventListener("drop", handleDrop);

        return () => {
            window?.removeEventListener("dragenter", showDropZone);

            dz?.removeEventListener("dragleave", hideDropZone);
            dz?.removeEventListener("dragenter", allowDrag);
            dz?.removeEventListener("dragover", allowDrag);
            dz?.removeEventListener("drop", handleDrop);
        };
    }, []);

    return (
        <div
            {...getRootProps()}
            ref={dropzoneRef}
            className="fixed z-[999] invisible bg-neutral-150 flex p-4 items-center justify-center inset-0"
        >
            <input
                className="fixed z-[9999] inset-0"
                name="files"
                {...getInputProps()}
            />

            <div className="flex flex-col items-center justify-center w-full h-full p-4 text-center border-2 border-black border-dashed pointer-events-none bg-neutral-150 rounded-2xl border-opacity-10">
                <PicturePlusIcon />
                <UIText weight="font-medium" className="mt-2 mb-1">
                    Add images, gifs, and videos — up to 10
                </UIText>
                <UIText tertiary>Drag + Drop / Copy + Paste</UIText>
            </div>
        </div>
    );
}
