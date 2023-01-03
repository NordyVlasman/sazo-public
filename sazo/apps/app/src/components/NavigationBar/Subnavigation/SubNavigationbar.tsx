import classNames from "classnames";
import Link from "next/link";
import { LargeTitle } from "@sazo/ui";

type Props = {
    title?: string;
    navLinks: {
        label: string;
        href: string;
        active: boolean;
    }[];
};

export function SubNavigationbar(props: Props) {
    const { navLinks, title } = props

    return (
        <>
            {title && (
                <div>
                    <LargeTitle weight="font-semibold" className="w-full px-4 py-6 pb-3 mx-auto leading-none sm:pb-5 sm:py-8 max-w-6xl">
                        {title}
                    </LargeTitle>
                </div>
            )}
            <div
                className={classNames(
                    "mx-top-14 z-10 flex flex-col gap-2"
                )}
            >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={classNames(
                                "block pl-4 -ml-px py-0.5 border-l-2",
                                {
                                    "text-opacity-100 border-opacity-100 border-l-violet-500 before:border-opacity-100 text-zinc-900":
                                        link.active,
                                    "text-opacity-50 hover:text-opacity-80 hover:border-opacity-50 before:border-opacity-0 hover:before:border-opacity-50":
                                        !link.active,
                                }
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
            </div>
        </>
    )
}
