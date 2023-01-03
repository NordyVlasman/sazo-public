interface Props {
    children: React.ReactNode;
}

export function Table(props: Props) {
    const { children } = props;

    return <div className="divide-y divide-neutral-150">{children}</div>;
}

export function TableRow(props: Props) {
    const { children } = props;

    return (
        <div className="flex flex-col items-start p-4 space-x-0 space-y-3 sm:space-y-0 sm:space-x-4 sm:items-center sm:flex-row">
            {children}
        </div>
    );
}
