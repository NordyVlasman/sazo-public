import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";

type Props = {
    children: React.ReactNode;
};

export function DialogTransitionContainer({ children }: Props) {
    return (
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-75"
            enterFrom="opacity-0 scale-[0.98] translate-y-4"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-75 translate-y-4"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-[0.98] translate-y-4"
        >
            {/*@ts-ignore*/}
            {children}
        </Transition.Child>
    );
}
