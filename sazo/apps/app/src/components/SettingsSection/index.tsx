import classnames from "classnames";
import Link from "next/link";
import { Headline, UIText } from "@sazo/ui";

interface Props {
  children: React.ReactNode;
}

export function Section(props: Props) {
  return (
    <div
      className="relative flex flex-col bg-white shadow rounded-xl"
      {...props}
    />
  );
}

export function Header(props: Props) {
  return (
    <div
      className="flex flex-col items-start justify-between px-4 pt-4 space-y-3 sm:items-center sm:space-y-0 sm:flex-row"
      {...props}
    />
  );
}

export function Title(props: Props) {
  return <Headline {...props} />;
}

export function Description(props: Props) {
  return <UIText tertiary className="px-4 mt-0.5 lg:max-w-2xl" {...props} />;
}

export function Separator() {
  return <div className="w-full h-px my-4 bg-neutral-150" />;
}

export function Footer(props: Props) {
  return (
    <div
      className="flex justify-end px-4 py-3 border-t rounded-b-xl bg-neutral-50 border-neutral-200"
      {...props}
    />
  );
}

interface Subtab {
  label: string;
  active: boolean;
  href: string;
}

interface SubtabProps {
  tabs: Subtab[];
}

export function Subtabs(props: SubtabProps) {
  const { tabs } = props;

  return (
    <div className="pt-2 border-b border-neutral-100">
      <nav className="flex">
        {tabs.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            scroll={false}
            className={classnames(
              "px-4 py-3 text-sm text-black -mb-px relative before:content-[''] before:block before:absolute before:h-0 before:bottom-0 before:border-b-2 before:border-black before:left-4 before:right-4",
              {
                "text-opacity-100 border-opacity-100 before:border-opacity-100":
                  link.active,
                "text-opacity-50 hover:text-opacity-80 hover:border-opacity-50 before:border-opacity-0 hover:before:border-opacity-50":
                  !link.active,
              }
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
