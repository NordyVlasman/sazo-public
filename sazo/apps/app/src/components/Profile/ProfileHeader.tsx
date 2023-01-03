type Props = {
    children: React.ReactNode;
};

export function ProfileHeader(props: Props) {
    const { children } = props;

    return (
        <div className="flex flex-col gap-2 py-6">
            {children}
        </div>
    );
  }
