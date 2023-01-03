import {useState} from "react";
import NextImage from "next/image";
import { PostFile } from "@sazo/types";
import { useHasMounted } from "@sazo/ui";
import { resizeAttachmentUrl } from "@sazo/core";

interface Props {
    file: PostFile;
    index: number;
    numFiles: number;
    width: number;
    priority?: boolean;
}

export function ImageAttachment(props: Props) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const hasMounted = useHasMounted();
    const { file, index, numFiles, priority } = props;

    let imageUrl = resizeAttachmentUrl(
        file.file_path as string,
        file.file_type as string,
        props.width,
    )

    if (hasMounted) {
        if (!dimensions.width || !dimensions.height) {
            let img = new Image();

            img.src = imageUrl;
            img.onload = () =>
                setDimensions({ width: img.width, height: img.height });
        }
    }

    function getHeight() {
        if (numFiles === 1) return "h-[680px]";
        if (numFiles === 2) return "h-[274px]";
        if (numFiles > 2) {
            if (index === 0) return "h-[680px]";
            return "h-[124px]";
        }
    }

    if (!dimensions.height) return <div className={getHeight()} />;

    return (
        <NextImage
            unoptimized
            priority={priority}
            width={dimensions.width}
            height={dimensions.height || 256}
            alt="An image attachment"
            src={imageUrl as string}
            className="relative object-contain h-full object-top-center"
        />
    );
}
