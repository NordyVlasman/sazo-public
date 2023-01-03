import React, {useRef} from "react";
import toast from "react-hot-toast";
import TextareaAutosize from "react-textarea-autosize";
import classnames from "classnames";
import { Button, Caption, ClipboardIcon, Tooltip, UIText } from "..";
import { useCopyToClipboard } from "../Hooks/useCopyToClipboard";


type InputType =
    | "text"
    | "email"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "url"
    | "date"
    | "datetime-local"
    | "month"
    | "time"
    | "week"
    | "currency";

interface Props {
    label?: string;
    labelHidden?: boolean;
    inlineError?: string | null;
    helpText?: React.ReactNode;
    id?: string;
    name?: string;
    type?: InputType;
    value?: string;
    placeholder?: string;
    // changes the text size of the input
    large?: boolean;
    required?: boolean;
    min?: number;
    max?: number;
    // only applicable to multiline inputs
    minRows?: number;
    autoComplete?: string;
    autoFocus?: boolean;
    clickToCopy?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    multiline?: boolean;
    prefix?: string;
    onChange?(value: string): void;
    onFocus?: (event?: React.FocusEvent) => void;
    onBlur?(event?: React.FocusEvent): void;
    onKeyDownCapture?(event?: React.KeyboardEvent): void;
    onCommandEnter?(event?: React.KeyboardEvent): void;
    colSpan?: string;
}

export function TextField(props: Props) {
    const {
        label,
        labelHidden,
        inlineError,
        helpText,
        id,
        name,
        type = "text",
        value,
        placeholder,
        large = false,
        required,
        min,
        max,
        minRows,
        autoComplete,
        autoFocus = false,
        clickToCopy = false,
        readOnly = false,
        onChange,
        onKeyDownCapture,
        onCommandEnter,
        onFocus,
        onBlur,
        disabled,
        multiline,
        prefix,
        colSpan = "col-span-full"
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [copy] = useCopyToClipboard();

    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        // @ts-ignore
        onChange && onChange(event.currentTarget.value);
    }

    function handleKeyDown(
        //@ts-ignore
        event: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
    ) {
        if (event.key === "Enter" && event.metaKey && onCommandEnter) {
            onCommandEnter(event);
        }
    }

    async function handleCopyClick() {
        await copy(value as string);
        const input = multiline ? textAreaRef.current : inputRef.current;

        // @ts-ignore
        input?.select();
        toast.success("Copied to clipboard");
    }

    const labelMarkup = label ? (
        <UIText
            // secondary
            className={classnames("mb-1 text-zinc-900", {
                "sr-only": labelHidden,
            })}
            weight={"font-medium"}
            size="text-xs"
            htmlFor={name}
        >
            {label}
        </UIText>
    ) : null;

    const prefixMarkup = prefix ? (
        <div className="flex items-center p-2 border border-r-0 rounded-l-md bg-neutral-50 border-neutral-200">
            <UIText tertiary>{prefix}</UIText>
        </div>
    ) : null;

    const helpMarkup = helpText ? (
        <Caption tertiary className="mt-2">
            {helpText}
        </Caption>
    ) : null;

    const errorMarkup = inlineError ? (
        <UIText className="pl-3 mt-2 text-red-600 border-l-2 border-red-600">
            {inlineError}
        </UIText>
    ) : null;

    const copyMarkup = clickToCopy ? (
        <Tooltip placement="top" label="Copy">
      <span className="absolute -translate-y-1/2 right-2 top-1/2">
        <Button
            onClick={handleCopyClick}
            plain
            leadingIcon={<ClipboardIcon />}
            iconOnly
        />
      </span>
        </Tooltip>
    ) : null;

    const inputClasses = classnames(
        "text-sm relative w-full text-black bg-white border rounded-md border-neutral-200 placeholder-neutral-400 focus:ring-2 focus:ring-blue-100",
        {
            "border-red-600 focus:ring-red-100 bg-red-50 focus:border-red-600":
            inlineError,
            "pr-10": clickToCopy,
            "text-opacity-50": readOnly,
            "rounded-md": !prefix,
            "rounded-l-none": prefix,
            "text-sm": !large,
            "text-base": large,
        }
    );

    const inputMarkup = multiline ? (
        <TextareaAutosize
            id={id}
            name={name}
            readOnly={readOnly}
            className={inputClasses}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onKeyDownCapture={onKeyDownCapture}
            onKeyDown={handleKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            onClick={clickToCopy ? handleCopyClick : undefined}
            required={required}
            autoComplete={autoComplete}
            autoFocus={autoFocus ? true : false}
            ref={textAreaRef}
            disabled={disabled}
            minRows={minRows}
        />
    ) : (
        <input
            type={type}
            id={id}
            name={name}
            readOnly={readOnly}
            className={inputClasses}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            onKeyDownCapture={onKeyDownCapture}
            onKeyDown={handleKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            onClick={clickToCopy ? handleCopyClick : undefined}
            required={required}
            autoComplete={autoComplete}
            autoFocus={autoFocus ? true : false}
            min={min}
            max={max}
            ref={inputRef}
            disabled={disabled}
        />
    );

    return (
        <div className={`relative flex flex-col ${colSpan}`}>
            {labelMarkup}
            <div className="relative flex flex-1">
                {prefixMarkup}
                {inputMarkup}
                {copyMarkup}
            </div>
            {helpMarkup}
            {errorMarkup}
        </div>
    );
}
