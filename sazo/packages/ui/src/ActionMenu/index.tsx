import { Menu, Transition } from "@headlessui/react";
import { Float } from "@headlessui-float/react";
import React, {forwardRef} from "react";
import {DotsHorizontal} from "../Icons";
import Link from "next/link";
import classnames from "classnames";

interface Props {
    actions: ActionType[];
    trigger?: React.ReactNode;
    disabled?: boolean;
    onOpen?: () => void;
}

export function ActionMenu(props: Props) {
    const { trigger, actions, disabled } = props;

    const defaultTrigger = trigger ? (
        trigger
    ) : (
        <div className="rounded-full">
            <DotsHorizontal size={32} />
        </div>
    );

    return (
        <Menu as="div" className="relative">
            <Float
                enter="transition duration-200 ease-out"
                enterFrom="scale-95 opacity-0"
                enterTo="scale-100 opacity-100"
                leave="transition duration-75 ease-in"
                leaveFrom="scale-100 opacity-100"
                leaveTo="scale-95 opacity-0"
                tailwindcssOriginClass
                placement="bottom-end"
                offset={4}
                portal
            >
                <Menu.Button
                    disabled={disabled}
                    onClick={props.onOpen}
                    className="flex bg-black bg-opacity-0 border border-transparent rounded-full hover:bg-opacity-5 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:bg-blue-50 focus:visible-text-blue-800 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-100"
                >
                    {/* @ts-ignore */}
                    {defaultTrigger}
                </Menu.Button>

                <Menu.Items className="z-30 origin-top-right bg-white rounded-lg shadow-md w-44 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="flex flex-col px-1 py-1">
                        {actions.map((action, index) => {
                            if (action.separator)
                                return <ActionMenuSeparator key={`separator-${index}`} />;
                            return <ActionMenuItem key={action.label} action={action} />;
                        })}
                    </div>
                </Menu.Items>
            </Float>
        </Menu>
    );
}

export type ActionType = {
    onClick?: () => void;
    url?: string;
    icon?: React.ReactNode;
    label: string | undefined;
    destructive?: boolean;
    separator?: boolean;
    disabled?: boolean;
};

type MenuItemProps = {
    action: ActionType;
};

interface MenuItemLinkProps {
    href: string;
    children: React.ReactNode;
    external?: boolean;
    className?: string;
}

const MenuItemLink = forwardRef(
    (props: MenuItemLinkProps, ref: React.ForwardedRef<HTMLAnchorElement>) => {
        let { href, children, external, className } = props;

        const target = external ? "_blank" : undefined;
        const rel = external ? "noopener noreferrer" : undefined;

        return (
            <Link href={href} legacyBehavior>
                <a ref={ref} target={target} rel={rel} className={className}>
                    {children}
                </a>
            </Link>
        );
    }
);

MenuItemLink.displayName = "MenuItemLink";

function ActionMenuItem(props: MenuItemProps) {
    const { action } = props;
    const { destructive, url, icon, label, onClick, disabled } = action;

    return (
        <Menu.Item disabled={disabled}>
            {({ active }) => {
                const classes = classnames(
                    "text-sm text-left px-3 flex items-center py-1 space-x-1 rounded",
                    {
                        "bg-neutral-200 text-neutral-900":
                            active && !destructive && !disabled,
                        "bg-red-100 text-red-900": active && destructive && !disabled,
                        "hover:bg-neutral-100 hover:text-neutral-900":
                            !destructive && !disabled,
                        "hover:bg-red-100 hover:text-red-900": destructive && !disabled,
                        "pl-1": icon,
                        "text-neutral-500": disabled,
                    }
                );

                return url ? (
                    <MenuItemLink className={classes} href={url}>
                        {icon && <span>{icon}</span>} <span>{label}</span>
                    </MenuItemLink>
                ) : (
                    <button className={classes} onClick={onClick} type="button">
                        {icon && <span>{icon}</span>} <span>{label}</span>
                    </button>
                );
            }}
        </Menu.Item>
    );
}

function ActionMenuSeparator() {
    return <div className="h-px my-1 -mx-1 bg-neutral-200" />;
}
