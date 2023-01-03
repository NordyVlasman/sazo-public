import classNames from "classnames";
import Image from "next/image";

import { UIText } from "../Text";
import { UserIcon } from "../Icons";

type Props = {
    size: number;
    src: string | null | undefined;
    initials?: string;
    [x: string]: any;
};

export function Avatar({ size, src, initials, children, ...rest }: Props) {
    function getInitialsColor(letter: string) {
        const colors = [
            "bg-blue-300",
            "bg-green-300",
            "bg-yellow-300",
            "bg-red-300",
            "bg-purple-300",
            "bg-pink-300",
            "bg-indigo-300",
            "bg-teal-300",
        ];

        const index = letter.charCodeAt(0) % colors.length;

        return colors[index];
    }

    if (!src) {
        const color = getInitialsColor(initials || "");

        return (
            <div
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    maxWidth: `${size}px`,
                    maxHeight: `${size}px`,
                }}
                className={classNames(
                    `flex items-center no-drag justify-center object-cover p-1 rounded-full select-none aspect-square ring-1 ring-inset ring-black ring-opacity-5 ${color}`,
                    {
                        "bg-neutral-150 text-neutral-300": !initials,
                    }
                )}
                {...rest}
            >
                {initials ? (
                    <span className="text-black text-opacity-60">
            <UIText
                inherit
                className="text-black text-opacity-50 saturate-150 mix-blend-color-burn"
                size="text-base"
                weight="font-medium"
            >
              {initials.slice(0, 1).toUpperCase()}
            </UIText>
          </span>
                ) : (
                    <UserIcon size={size * 0.75} />
                )}
            </div>
        );
    }

    return (
        <Image
            alt={`Avatar image`}
            width={size}
            height={size}
            src={src}
            draggable={false}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                maxWidth: `${size}px`,
                maxHeight: `${size}px`,
            }}
            className="object-cover bg-white rounded-full select-none no-drag aspect-square ring-1 ring-inset ring-black ring-opacity-5"
            {...rest}
        />
    );
}