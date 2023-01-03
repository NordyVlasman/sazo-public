import classnames from "classnames";

export interface BaseTextProps {
    element?: "h1" | "h2" | "h3" | "h4" |"h5" | "h6" | "p" | "span";

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

export function UIText({
    id = undefined,
    element: Element = "p",
    className = "",
    weight = "font-normal",
    size = "text-sm",
    primary = true,
    secondary = false,
    tertiary = false,
    inherit = false,
    ...rest
}: BaseTextProps) {
    const classes = classnames(
        weight,
        size,
        {
            "text-inherit": inherit,
            "text-black": primary && !inherit,
            "text-black text-opacity-70": secondary && !inherit,
            "text-black text-opacity-50": tertiary && !inherit,
        },
        className
    );

    return <Element id={id} className={classes} {...rest} />;
}

export function LargeTitle({
    element = "h1",
    weight = "font-medium",
    size = "text-2xl md:text-3xl",
    ...rest
}: BaseTextProps) {
    return <UIText element={element} weight={weight} size={size} {...rest} />;
}

export function Title1({
    element = "h2",
    weight = "font-medium",
    size = "text-xl md:text-2xl",
    ...rest
}: BaseTextProps) {
    return <UIText element={element} weight={weight} size={size} {...rest} />;
}

export function Title2({
    element = "h2",
    weight = "font-medium",
    size = "text-lg md:text-xl",
    ...rest
}: BaseTextProps) {
    return <UIText element={element} weight={weight} size={size} {...rest} />;
}

export function Title3({
    element = "h2",
    weight = "font-medium",
    size = "text-md md:text-lg",
    ...rest
}: BaseTextProps) {
    return <UIText element={element} weight={weight} size={size} {...rest} />;
}

export function Headline({
    weight = "font-medium",
    size = "text-base",
    ...rest
}: BaseTextProps) {
    return <UIText weight={weight} size={size} {...rest} />;
}

export function Body({
    secondary = true,
    size = "text-base",
    ...rest
}: BaseTextProps) {
    return <UIText secondary={secondary} size={size} {...rest} />;
}

export function Caption({
    tertiary = true,
    size = "text-xs",
    ...rest
}: BaseTextProps) {
    return <UIText tertiary={tertiary} size={size} {...rest} />
}
