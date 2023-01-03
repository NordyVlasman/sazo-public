export * from "./Container";
export * from "./Overlay";

import { Dialog as D, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";

import { CloseIcon } from "../Icons";
import { DialogTransitionContainer } from "./Container";
import { DialogOverlay } from "./Overlay";
interface Props {
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
    children: React.ReactNode;
    title: string;
    description?: string;
    width?:
        | "max-w-xs"
        | "max-w-sm"
        | "max-w-md"
        | "max-w-lg"
        | "max-w-xl"
        | "max-w-2xl"
        | "max-w-3xl"
        | "max-w-full";
}

export function Dialog(props: Props) {
    const {
        isVisible,
        setIsVisible,
        children,
        title,
        description,
        width = "max-w-md",
    } = props;

    const closeButtonRef = useRef<HTMLButtonElement>(null);

    return (
        <Transition appear show={isVisible} as={Fragment}>
            <D
                as="div"
                className="relative z-[100]"
                onClose={() => setIsVisible(false)}
                initialFocus={closeButtonRef}
            >
                <DialogOverlay />

                <div className="fixed inset-0">
                    <div className="flex items-center justify-center min-h-full p-4">
                        <DialogTransitionContainer>
                            <D.Panel
                                className={`relative w-full ${width} max-h-[calc(100vh-32px)] text-left align-middle transition-all transform bg-white shadow-2xl rounded-lg`}
                            >
                                <div className="flex flex-col max-h-[calc(100vh-32px)] gap-3">
                                    <div className="sticky top-0 z-10 flex flex-col px-3 pt-3 bg-white rounded-t-lg">
                                        <div className="flex items-center justify-between">
                                            <D.Title as="h3" className="text-md font-medium">
                                                {title}
                                            </D.Title>
                                            <button
                                                ref={closeButtonRef}
                                                className="focus:ring-2 focus:ring-blue-100 w-8 h-8 inline-flex items-center justify-center focus:outline-none border focus:border-blue-500 leading-none rounded-md touch-none select-none text-[13px] font-medium disabled:opacity-50 disabled:cursor-not-allowed bg-white"
                                                onClick={() => setIsVisible(false)}
                                            >
                                                <CloseIcon />
                                            </button>
                                        </div>
                                        {description && (
                                            <D.Description className="w-[80%] -mt-1 text-sm text-neutral-500">
                                                {description}
                                            </D.Description>
                                        )}
                                    </div>

                                    {children}
                                </div>
                            </D.Panel>
                        </DialogTransitionContainer>
                    </div>
                </div>
            </D>
        </Transition>
    );
}

type DefaultProps = {
    children: React.ReactNode;
};

export function DialogContentContainer(props: DefaultProps) {
    return <div className="px-3" {...props} />;
}

type JustifyProps = {
    justify?:
        | "justify-start"
        | "justify-end"
        | "justify-center"
        | "justify-between"
        | "justify-around"
        | "justify-evenly";
};

export function DialogFooter(props: DefaultProps & JustifyProps) {
    const { justify = "justify-end", ...rest } = props;

    return (
        <div
            className={`flex gap-2 sticky bottom-0 bg-white rounded-b-lg border-t border-neutral-200 items-center p-3 ${justify}`}
            {...rest}
        />
    );
}
