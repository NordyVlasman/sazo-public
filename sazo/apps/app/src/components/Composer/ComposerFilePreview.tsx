import {memo, useEffect} from "react";
import NextImage from "next/image";
import classNames from "classnames";
import { TransformedFile } from "@sazo/types";
import { ComposerDialogActionType, useComposer } from "../../contexts/composer";
import { getAttachmentUrl } from "@sazo/core";
import { Button, LoadingSpinner, ReorderDotsIcon, TrashIcon, VideoIcon } from "@sazo/ui";

type Props = {
    file: TransformedFile;
    reorderable: boolean;
}

export function ComposerFilePreview(props: Props) {
    const { file, reorderable } = props
    const { dispatch } = useComposer()

    useEffect(() => {
        if (file.key) {
            try {
                const loadImg = new Image()
                const url = getAttachmentUrl(file.key)

                loadImg.src = url
            } catch (err) {}
        }
    }, [file.key])

    return (
        <>
            {reorderable && (
                <div className="flex items-center justify-center p-1 text-black text-opacity-50 rounded-lg hover:bg-black hover:bg-opacity-5 hover:text-opacity-70">
                    <ReorderDotsIcon size={20} className="translate-x-0.5" />
                </div>
            )}

            <AttachmentPreview file={file.raw} />

            <p
                className={classNames("flex-1 font-mono text-xs", {
                    "text-opacity-50": !file.key,
                    "text-neutral-500": file.key,
                    "text-red-500 text-opacity-100": file.error,
                })}
            >
                {file.raw.name}
                {file.error && " - " + file.error.message}
            </p>

            {!file.key && !file.error && (
                <span className="pr-2">
                  <LoadingSpinner />
                </span>
            )}

            {(file.key || file.error) && (
                // wrapping div is required to ensure the tooltip is centered
                <div className="inline-flex">
                    <Button
                        onClick={() =>
                            dispatch({
                                type: ComposerDialogActionType.removeFile,
                                payload: file,
                            })
                        }
                        iconOnly
                        accessibilityLabel="Remove file"
                        plain
                        tooltip="Remove"
                        leadingIcon={<TrashIcon />}
                    />
                </div>
            )}
        </>
    );
}

type PreviewProps = {
    file: File
}

function areEqual(prev: PreviewProps, next: PreviewProps) {
    return prev.file === next.file;
}

const AttachmentPreview = memo(function Attachment(props: PreviewProps) {
    const { file } = props;

    switch (file.type) {
        case "image/png":
        case "image/jpeg":
        case "image/gif":
        case "image/jpg":
            return (
                <div className="w-9 h-9">
                    <NextImage
                        width={36}
                        height={36}
                        alt="preview of image"
                        unoptimized
                        src={window.URL.createObjectURL(file)}
                        className="object-cover w-full h-full rounded"
                    />
                </div>
            );
        case "video/quicktime":
        case "video/mp4":
            return (
                <div className="flex items-center justify-center text-white bg-black rounded-md w-9 h-9">
                    <VideoIcon />
                </div>
            );
        default:
            return null;
    }
}, areEqual);
