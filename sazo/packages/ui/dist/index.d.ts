import React$1 from 'react';
import { Placement } from '@floating-ui/react-dom-interactions';

declare function useHasMounted(): boolean;

declare function useCopyToClipboard(): [
    (text: string) => Promise<boolean>,
    boolean
];

type Props$7 = {
    size: number;
    src: string | null | undefined;
    initials?: string;
    [x: string]: any;
};
declare function Avatar({ size, src, initials, children, ...rest }: Props$7): JSX.Element;

interface Props$6 {
    mode?: string;
}
declare function Logo({ mode }: Props$6): JSX.Element;

interface BaseButton {
    /** A unique identifier for the button */
    id?: string;
    /** A destination to link to, rendered in the href attribute of a link */
    url?: string;
    /** Forces url to open in a new tab */
    external?: boolean;
    /** Tells the browser to download the url instead of opening it. Provides a hint for the downloaded filename if it is a string value */
    download?: string | boolean;
    /** Allows the button to submit a form */
    submit?: boolean;
    /** Disables the button, disallowing merchant interaction */
    disabled?: boolean;
    /** Replaces button text with a spinner while a background action is being performed */
    loading?: boolean;
    /** Sets the button in a pressed state */
    pressed?: boolean;
    /** Visually hidden text for screen readers */
    accessibilityLabel?: string;
    /** A valid WAI-ARIA role to define the semantic value of this element */
    role?: string;
    /** Id of the element the button controls */
    ariaControls?: string;
    /** Tells screen reader the controlled element is expanded */
    ariaExpanded?: boolean;
    /** Indicates the ID of the element that describes the button */
    ariaDescribedBy?: string;
    /** Indicates the current checked state of the button when acting as a toggle or switch */
    ariaChecked?: 'false' | 'true';
    /** Callback when clicked */
    onClick?: any;
    /** Callback when button becomes focussed */
    onFocus?(): void;
    /** Callback when focus leaves button */
    onBlur?(): void;
    /** Callback when a keypress event is registered on the button */
    onKeyPress?(event: React.KeyboardEvent<HTMLButtonElement>): void;
    /** Callback when a keyup event is registered on the button */
    onKeyUp?(event: React.KeyboardEvent<HTMLButtonElement>): void;
    /** Callback when a keydown event is registered on the button */
    onKeyDown?(event: React.KeyboardEvent<HTMLButtonElement>): void;
    /** Callback when mouse enter */
    onMouseEnter?(): void;
    /** Callback when element is touched */
    onTouchStart?(): void;
    /** Callback when pointerdown event is being triggered */
    onPointerDown?(): void;
}

interface ButtonProps extends BaseButton {
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
declare function Button({ id, children, url, disabled, external, download, submit, loading, pressed, accessibilityLabel, role, ariaControls, ariaExpanded, ariaDescribedBy, onClick, onFocus, onBlur, onKeyDown, onKeyPress, onKeyUp, onMouseEnter, onTouchStart, onPointerDown, leadingIcon, trailingIcon, iconOnly, tooltip, primary, important, white, onboarding, destructive, plain, fullWidth, onDark, rounded, }: ButtonProps): JSX.Element;

interface UnstyledButtonProps extends BaseButton {
    /** The content to display inside the button */
    children?: React$1.ReactNode;
    /** A custom class name to apply styles to button */
    className?: string;
    [key: string]: any;
}
declare function UnstyledButton({ id, children, className, url, external, download, submit, disabled, loading, pressed, accessibilityLabel, role, ariaControls, ariaExpanded, ariaDescribedBy, onClick, onFocus, onBlur, onKeyDown, onKeyPress, onKeyUp, onMouseEnter, onTouchStart, ...rest }: UnstyledButtonProps): any;

interface Props$5 {
    children: React.ReactNode;
}
declare function Table(props: Props$5): JSX.Element;
declare function TableRow(props: Props$5): JSX.Element;

interface Props$4 {
    label: string;
    placement?: Placement;
    children: JSX.Element;
}
declare const Tooltip: ({ children, label, placement }: Props$4) => JSX.Element;

interface BaseTextProps {
    element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    children?: React.ReactNode;
    id?: string;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    inherit?: boolean;
    weight?: "font-normal" | "font-medium" | "font-semibold";
    size?: string;
    className?: string;
    [key: string]: any;
}
declare function UIText({ id, element: Element, className, weight, size, primary, secondary, tertiary, inherit, ...rest }: BaseTextProps): JSX.Element;
declare function LargeTitle({ element, weight, size, ...rest }: BaseTextProps): JSX.Element;
declare function Title1({ element, weight, size, ...rest }: BaseTextProps): JSX.Element;
declare function Title2({ element, weight, size, ...rest }: BaseTextProps): JSX.Element;
declare function Title3({ element, weight, size, ...rest }: BaseTextProps): JSX.Element;
declare function Headline({ weight, size, ...rest }: BaseTextProps): JSX.Element;
declare function Body({ secondary, size, ...rest }: BaseTextProps): JSX.Element;
declare function Caption({ tertiary, size, ...rest }: BaseTextProps): JSX.Element;

declare function LoadingSpinner(): JSX.Element;

type Props$3 = {
    children: React$1.ReactNode;
};
declare function DialogTransitionContainer({ children }: Props$3): JSX.Element;

declare function DialogOverlay(): JSX.Element;

interface Props$2 {
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
    children: React.ReactNode;
    title: string;
    description?: string;
    width?: "max-w-xs" | "max-w-sm" | "max-w-md" | "max-w-lg" | "max-w-xl" | "max-w-2xl" | "max-w-3xl" | "max-w-full";
}
declare function Dialog(props: Props$2): JSX.Element;
type DefaultProps = {
    children: React.ReactNode;
};
declare function DialogContentContainer(props: DefaultProps): JSX.Element;
type JustifyProps = {
    justify?: "justify-start" | "justify-end" | "justify-center" | "justify-between" | "justify-around" | "justify-evenly";
};
declare function DialogFooter(props: DefaultProps & JustifyProps): JSX.Element;

type FormErrorProps = {
    children?: React.ReactNode;
};
declare function FormError(props: FormErrorProps): JSX.Element;
type MutationErrorProps = {
    mutation: any;
};
declare function MutationError(props: MutationErrorProps): JSX.Element;

interface Props$1 {
    actions: ActionType[];
    trigger?: React$1.ReactNode;
    disabled?: boolean;
    onOpen?: () => void;
}
declare function ActionMenu(props: Props$1): JSX.Element;
type ActionType = {
    onClick?: () => void;
    url?: string;
    icon?: React$1.ReactNode;
    label: string | undefined;
    destructive?: boolean;
    separator?: boolean;
    disabled?: boolean;
};

interface IconProps {
    size?: number;
    [key: string]: any;
}
declare function UnorderedListIcon(props: any): JSX.Element;
declare function HomeIcon(props: IconProps): JSX.Element;
declare function BookmarkIcon(props: IconProps): JSX.Element;
declare function NewHeartIcon(props: IconProps): JSX.Element;
declare function ToolsIcon(props: IconProps): JSX.Element;
declare function RocketIcon(props: IconProps): JSX.Element;
declare function MedalIcon(props: IconProps): JSX.Element;
declare function RefreshIcon(props: IconProps): JSX.Element;
declare function ButtonPlusIcon(props: IconProps): JSX.Element;
declare function FaceSmileIcon(props: IconProps): JSX.Element;
declare function ChatBubbleIcon(props: IconProps): JSX.Element;
declare function CloseIcon(props: IconProps): JSX.Element;
declare function BroadcastIcon(props: IconProps): JSX.Element;
declare function AlertIcon(props: IconProps): JSX.Element;
declare function CheckIcon(props: IconProps): JSX.Element;
declare function CheckCircleIcon(props: IconProps): JSX.Element;
declare function TrashIcon(props: IconProps): JSX.Element;
declare function VideoIcon(props: IconProps): JSX.Element;
declare function PlayIcon(props: IconProps): JSX.Element;
declare function ArrowUpRightCircleIcon(props: IconProps): JSX.Element;
declare function ArrowDownIcon(props: IconProps): JSX.Element;
declare function ArrowLeftIcon(props: IconProps): JSX.Element;
declare function SparklesIcon(props: IconProps): JSX.Element;
declare function ShieldTickIcon(props: IconProps): JSX.Element;
declare function DotsHorizontal(props: IconProps): JSX.Element;
declare function ClipboardIcon(props: IconProps): JSX.Element;
declare function GearIcon(props: IconProps): JSX.Element;
declare function UserCircleIcon(props: IconProps): JSX.Element;
declare function SpeechBubblePlusIcon(props: IconProps): JSX.Element;
declare function LogOutIcon(props: IconProps): JSX.Element;
declare function PicturePlusIcon(props: IconProps): JSX.Element;
declare function PlusIcon(props: IconProps): JSX.Element;
declare function PlusCircleIcon(props: any): JSX.Element;
declare function PencilIcon(props: IconProps): JSX.Element;
declare function LinkIcon(props: IconProps): JSX.Element;
declare function DownloadIcon(props: IconProps): JSX.Element;
declare function DoubleChevronRightIcon(props: IconProps): JSX.Element;
declare function DoubleChevronLeftIcon(props: IconProps): JSX.Element;
declare function ChevronDownIcon(props: IconProps): JSX.Element;
declare function ChevronUpIcon(props: IconProps): JSX.Element;
declare function ChevronLeftIcon(props: IconProps): JSX.Element;
declare function InformationIcon(props: IconProps): JSX.Element;
declare function CreditCardIcon(props: IconProps): JSX.Element;
declare function FileIcon(props: IconProps): JSX.Element;
declare function FireIcon(props: IconProps): JSX.Element;
declare function HeartIcon(props: IconProps): JSX.Element;
declare function ThumbsUpIcon(props: IconProps): JSX.Element;
declare function TagIcon(props: IconProps): JSX.Element;
declare function NotificationBellIcon(props: IconProps): JSX.Element;
declare function UserIcon(props: IconProps): JSX.Element;
declare function BellIcon(props: IconProps): JSX.Element;
declare function BellOffIcon(props: IconProps): JSX.Element;
declare function ProjectsIcon(props: IconProps): JSX.Element;
declare function ArchiveIcon(props: IconProps): JSX.Element;
declare function LightbulbIcon(props: IconProps): JSX.Element;
declare function QRCodeIcon(props: IconProps): JSX.Element;
declare function ExternalShareIcon(props: any): JSX.Element;
declare function ReorderDotsIcon(props: any): JSX.Element;
declare function ArrowRightIcon(props: any): JSX.Element;
declare function CalendarIcon(props: any): JSX.Element;
declare function SlackIcon(props: any): JSX.Element;
declare function GoogleCalendarIcon(props: any): JSX.Element;
declare function FigmaIcon(): JSX.Element;

interface ListBoxOption {
    value: any;
    label: string;
    leadingAccessory?: React.ReactNode;
    key?: string;
}
interface ListBoxProps {
    options: ListBoxOption[];
    defaultOption: ListBoxOption;
    onChange: (option: ListBoxOption) => void;
    disabled?: boolean;
    leadingAccessory?: React.ReactNode;
    width?: string;
    rounded?: string;
}
declare function ListBox(props: ListBoxProps): JSX.Element;

type InputType = "text" | "email" | "number" | "password" | "search" | "tel" | "url" | "date" | "datetime-local" | "month" | "time" | "week" | "currency";
interface Props {
    label?: string;
    labelHidden?: boolean;
    inlineError?: string | null;
    helpText?: React$1.ReactNode;
    id?: string;
    name?: string;
    type?: InputType;
    value?: string;
    placeholder?: string;
    large?: boolean;
    required?: boolean;
    min?: number;
    max?: number;
    minRows?: number;
    autoComplete?: string;
    autoFocus?: boolean;
    clickToCopy?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    multiline?: boolean;
    prefix?: string;
    onChange?(value: string): void;
    onFocus?: (event?: React$1.FocusEvent) => void;
    onBlur?(event?: React$1.FocusEvent): void;
    onKeyDownCapture?(event?: React$1.KeyboardEvent): void;
    onCommandEnter?(event?: React$1.KeyboardEvent): void;
    colSpan?: string;
}
declare function TextField(props: Props): JSX.Element;

export { ActionMenu, ActionType, AlertIcon, ArchiveIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpRightCircleIcon, Avatar, BellIcon, BellOffIcon, Body, BookmarkIcon, BroadcastIcon, Button, ButtonPlusIcon, ButtonProps, CalendarIcon, Caption, ChatBubbleIcon, CheckCircleIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronUpIcon, ClipboardIcon, CloseIcon, CreditCardIcon, Dialog, DialogContentContainer, DialogFooter, DialogOverlay, DialogTransitionContainer, DotsHorizontal, DoubleChevronLeftIcon, DoubleChevronRightIcon, DownloadIcon, ExternalShareIcon, FaceSmileIcon, FigmaIcon, FileIcon, FireIcon, FormError, GearIcon, GoogleCalendarIcon, Headline, HeartIcon, HomeIcon, InformationIcon, LargeTitle, LightbulbIcon, LinkIcon, ListBox, LoadingSpinner, LogOutIcon, Logo, MedalIcon, MutationError, NewHeartIcon, NotificationBellIcon, PencilIcon, PicturePlusIcon, PlayIcon, PlusCircleIcon, PlusIcon, ProjectsIcon, QRCodeIcon, RefreshIcon, ReorderDotsIcon, RocketIcon, ShieldTickIcon, SlackIcon, SparklesIcon, SpeechBubblePlusIcon, Table, TableRow, TagIcon, TextField, ThumbsUpIcon, Title1, Title2, Title3, ToolsIcon, Tooltip, TrashIcon, UIText, UnorderedListIcon, UnstyledButton, UnstyledButtonProps, UserCircleIcon, UserIcon, VideoIcon, useCopyToClipboard, useHasMounted };
