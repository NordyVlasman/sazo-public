type FormErrorProps = {
  children?: React.ReactNode;
};

export function FormError(props: FormErrorProps) {
  const { children } = props;

  if (!children) return null;

  return (
    <p className="pl-2 text-sm text-left text-red-600 border-l-2 border-red-600">
      {children}
    </p>
  );
}

type MutationErrorProps = {
  mutation: any;
};

export function MutationError(props: MutationErrorProps) {
  const { mutation } = props;

  const isValid = mutation.isError && mutation.error instanceof Error;

  if (!isValid) return null;

  return <>{mutation.error.message}</>;
}
