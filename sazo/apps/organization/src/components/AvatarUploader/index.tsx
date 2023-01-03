import classNames from "classnames";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { PresignedResource, TransformedFile } from "@sazo/types";
import { transformFile, useFileUploadMutation, useGetCurrentUser } from "@sazo/core";
import { PencilIcon, PicturePlusIcon } from "@sazo/ui";

type Props = {
    onFileUploadSuccess: (file: TransformedFile, key: string | null) => void;
    onFileUploadError: (file: TransformedFile, error: Error) => void;
    onFileUploadStart: (file: TransformedFile) => void;
    src?: string | null;
    resource: PresignedResource;
}

export function AvatarUploader(props: Props) {
    const { data: currentUser } = useGetCurrentUser();
    const {
        onFileUploadSuccess,
        onFileUploadError,
        onFileUploadStart,
        resource,
        src,
    } = props;

  const [file, setFile] = useState<TransformedFile | null>(null);

  const fileUploadMutation = useFileUploadMutation(
        onFileUploadSuccess,
        //@ts-ignore
        onFileUploadError
    )

    const onDrop = useCallback(
        async (acceptedFiles: File[]) => {
            const acceptedFile = acceptedFiles[0];

            if (!acceptedFile) {
                return toast.error(
                    "Avatars must be a JPEG or PNG and be less than 1mb"
                );
            }

            const transformedFile = transformFile(acceptedFile);

            setFile(transformedFile);
            onFileUploadStart(transformedFile);

            fileUploadMutation.mutate({
                file: transformedFile,
                resource
            });
        },
        [currentUser, resource, onFileUploadStart, fileUploadMutation]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxFiles: 1,
        maxSize: 1024 * 1024,
        useFsAccessApi: false,
        multiple: false,
        accept: {
            "image/*": [".jpg", ".jpeg", ".png"],
        },
    });

    const previewableAvatar = !!file
        ? window.URL.createObjectURL(file.raw)
        : !!src
        ? src
        : null;

    return (
        <div className="relative inline-flex rounded-full" {...getRootProps()}>
            <input name="files rounded-full" {...getInputProps()} />
            {previewableAvatar ? (
                <Image
                    src={previewableAvatar}
                    width={128}
                    height={128}
                    alt="Profile picture"
                    className={classNames(
                        "inline-flex object-cover flex-none rounded-full cursor-pointer w-32 h-32 min-w-[128px]",
                        { "opacity-50": fileUploadMutation.isLoading }
                    )}
                />
            ): (
                <div
                    className={classNames(
                        "flex items-center justify-center rounded-full text-sm border border-dashed cursor-pointer text-neutral-500 w-32 h-32",
                        {
                            "border-blue-400 hover:border-blue-400 bg-blue-100": isDragActive,
                            "border-neutral-200 hover:border-neutral-300 bg-neutral-50":
                            !isDragActive,
                        }
                  )}
                >
                    <PicturePlusIcon />
                </div>
            )}

            <div className="absolute bottom-0 right-0 flex items-center justify-center p-2 transition-all translate-y-0 bg-white rounded-full shadow-md hover:shadow-lg cursor-pointer hover:-translate-y-0.5">
                <PencilIcon size={20} />
            </div>
        </div>
    )
}
