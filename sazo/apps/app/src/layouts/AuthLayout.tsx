import Link from 'next/link'
import React from "react";
import { Logo } from "@sazo/ui";

interface Props {
    title: string;
    subtitle: React.ReactNode;
    children?: React.ReactNode;
}

export function AuthLayout({ title, subtitle, children }: Props) {
    return (
        <main className="flex min-h-full overflow-hidden pt-16 sm:py-28">
            <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
                <Link href="/" aria-label="Home" className="mx-auto text-2xl font-bold">
                    <Logo mode={"dark"} />
                </Link>
                <div className="relative mt-12 sm:mt-16">
                    <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-3 text-center text-lg text-gray-600">{subtitle}</p>
                    )}
                </div>
                {children && (
                    <div className="-mx-4 mt-10 flex-auto bg-white py-10 px-4 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-xl sm:p-16">
                        {children}
                    </div>
                )}
            </div>
        </main>
    )
}
