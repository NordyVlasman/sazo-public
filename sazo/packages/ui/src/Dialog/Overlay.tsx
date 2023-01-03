import { Transition } from "@headlessui/react";
import { Fragment } from "react";

export function DialogOverlay() {
    return (
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-75"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed inset-0 bg-black bg-opacity-20" />
        </Transition.Child>
    );
}
