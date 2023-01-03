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
                    "max-w-6xl mx-auto top-14 z-10 flex w-full border-b border-neutral-200"
                )}
            >
                <div className="flex w-full mx-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={classNames(
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
                </div>
            </div>
        </>
    )
}
