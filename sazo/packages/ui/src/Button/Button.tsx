import classnames from "classnames";

import { LoadingSpinner } from "../LoadingSpinner";
import { Tooltip } from "../Tooltip";
import ConditionalWrap from "../utils/conditionalWrap";
import type { BaseButton } from "./types";
import { UnstyledButton, UnstyledButtonProps } from "./UnstyledButton";

export interface ButtonProps extends BaseButton {
    /** The content to display inside the button */
    children?: string | string[];
    /** Provides extra visual weight and identifies the primary action in a set of buttons */
    primary?: boolean;
    /** Makes a button an even-more prominent action on the page */
    important?: boolean;
    /** Makes a button white*/
    white?: boolean;
    /** Buttons that dont use brand colors to distinguish onboarding activites */
    onboarding?: boolean;
    /** Renders a button that looks like a link */
    plain?: boolean;
    /** Indicates a dangerous or potentially negative action */
    destructive?: boolean;
    /** Allows the button to grow to the width of its container */
    fullWidth?: boolean;
    /** Icon to display to the leading side of the button content */
    leadingIcon?: React.ReactElement;
    /** Icon to display to the trailing side of the button content */
    trailingIcon?: React.ReactElement;
    /** Renders a round button */
    iconOnly?: boolean;
    /** Adds a tooltip wrapper */
    tooltip?: string;
    /** Changes styles based on if the button is on a dark background */
    onDark?: boolean;

    rounded?: boolean;
}

type LinkButtonProps = Pick<ButtonProps, "url" | "external" | "download">;

type ActionButtonProps = Pick<
    ButtonProps,
    | "submit"
    | "disabled"
    | "loading"
    | "ariaControls"
    | "ariaExpanded"
    | "pressed"
    | "onKeyDown"
    | "onKeyUp"
    | "onKeyPress"
    | "onPointerDown"
    >;

interface CommonButtonProps
    extends Pick<
        ButtonProps,
        | "id"
        | "accessibilityLabel"
        | "ariaDescribedBy"
        | "role"
        | "onClick"
        | "onFocus"
        | "onBlur"
        | "onMouseEnter"
        | "onTouchStart"
        > {
    className: UnstyledButtonProps["className"];
}

export function Button({
                           id,
                           children,
                           url,
                           disabled,
                           external,
                           download,
                           submit,
                           loading,
                           pressed,
                           accessibilityLabel,
                           role,
                           ariaControls,
                           ariaExpanded,
                           ariaDescribedBy,
                           onClick,
                           onFocus,
                           onBlur,
                           onKeyDown,
                           onKeyPress,
                           onKeyUp,
                           onMouseEnter,
                           onTouchStart,
                           onPointerDown,
                           leadingIcon,
                           trailingIcon,
                           iconOnly,
                           tooltip,
                           primary,
                           important,
                           white,
                           onboarding,
                           destructive,
                           plain,
                           fullWidth,
                           onDark,
                           rounded = false,
                       }: ButtonProps) {
    const isDisabled = disabled || loading;

    const childMarkup = children ? (
        <span key={disabled ? "text-disabled" : "text"}>{children}</span>
    ) : null;

    const leadingIconMarkup = leadingIcon && !loading ? leadingIcon : null;
    const trailingIconMarkup = trailingIcon && !loading ? trailingIcon : null;

    const spinnerSVGMarkup = loading ? <LoadingSpinner /> : null;

    const commonClasses = classnames(
        "focus-visible:ring-2 select-none h-8 inline-flex items-center justify-center focus-visible:outline-none border focus-visible:border-blue-500 leading-none touch-none select-none text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed",
        {
            "w-full": fullWidth,
            "flex-1": fullWidth,
            "w-auto": !fullWidth,
            "flex-none": !fullWidth,
            "pr-4": leadingIcon && children,
            "pl-4": trailingIcon && children,
            "pl-3": leadingIcon && !iconOnly,
            "pr-3": trailingIcon && !iconOnly,
            "px-3.5": !leadingIcon && !trailingIcon,
            "w-8 h-8 flex items-center justify-center": iconOnly,
            "focus-visible:ring-blue-100": !onDark,
            "focus-visible:ring-blue-500 focus-visible:ring-opacity-20": onDark,
            "rounded-full": rounded,
            "rounded-md": !rounded,
        }
    );

    let visualClasses = onDark
        ? "bg-white bg-opacity-10 disabled:hover:bg-opacity-10 hover:bg-opacity-20 border-transparent text-white text-opacity-90 hover:text-white"
        : "bg-black bg-opacity-5 disabled:hover:bg-opacity-5 hover:bg-opacity-10 border-transparent text-neutral-800 hover:text-black";

    if (primary) {
        visualClasses = onDark
            ? "text-black bg-white disabled:hover:bg-white disabled:border-transparent hover:bg-opacity-100 bg-opacity-90 shadow-sm border-white border-opacity-5"
            : "text-white bg-violet-500 disabled:hover:bg-violet-600 disabled:border-transparent hover:bg-violet-600 shadow-sm border-violet-500 hover:border-violet-600";
    }

    if (important) {
        visualClasses =
            "text-white bg-blue-500 hover:bg-blue-600 shadow-sm border-blue-500";
    }

    if (onboarding) {
        visualClasses =
            "text-white bg-green-600 hover:bg-green-700 shadow-sm hover:border-green-700 border-green-600";
    }

    if (white) {
        visualClasses = onDark
            ? "text-white bg-white bg-opacity-20 shadow-sm border-white border-opacity-5"
            : "bg-white text-black shadow-sm border-neutral-200";
    }

    if (destructive) {
        visualClasses =
            "text-white bg-red-600 hover:bg-red-700 shadow-button shadow-sm border-red-500";
    }

    if (plain) {
        visualClasses = onDark
            ? "bg-white bg-opacity-0 hover:bg-opacity-5 text-white text-opacity-70 hover:text-white border-transparent"
            : "bg-black bg-opacity-0 hover:bg-opacity-5 text-neutral-700 hover:text-black border-transparent";
    }

    const className = `${commonClasses} ${visualClasses}`;

    const commonProps: CommonButtonProps = {
        id,
        className,
        accessibilityLabel,
        ariaDescribedBy,
        role,
        onClick,
        onFocus,
        onBlur,
        onMouseEnter,
        onTouchStart,
    };

    const linkProps: LinkButtonProps = {
        url,
        external,
        download,
    };

    const actionProps: ActionButtonProps = {
        submit,
        disabled: isDisabled,
        loading,
        ariaControls,
        ariaExpanded,
        pressed,
        onKeyDown,
        onKeyUp,
        onKeyPress,
        onPointerDown,
    };

    const buttonMarkup = (
        <UnstyledButton {...commonProps} {...linkProps} {...actionProps}>
            <ConditionalWrap
                condition={!!leadingIcon || !!trailingIcon || !!loading}
                wrap={(children) => (
                    <span
                        className={`${
                            leadingIcon || trailingIcon || loading
                                ? "flex items-center justify-center space-x-1.5"
                                : ""
                        }`}
                    >
            {children}
          </span>
                )}
            >
                <>
                    {spinnerSVGMarkup}
                    {leadingIconMarkup}
                    {childMarkup}
                    {trailingIconMarkup}
                </>
            </ConditionalWrap>
        </UnstyledButton>
    );

    return (
        <ConditionalWrap
            condition={!!tooltip}
            wrap={(children) => (
                <Tooltip label={tooltip as string}>
                    <span>{children}</span>
                </Tooltip>
            )}
        >
            {buttonMarkup}
        </ConditionalWrap>
    );
}
