import Link from 'next/link'
import React from "react";
import { LargeTitle, Logo } from "@sazo/ui";

interface Props {
    title: string;
    subtitle?: React.ReactNode | string;
    children?: React.ReactNode;
}

export function AuthLayout({ title, subtitle, children }: Props) {
    return (
        <main className="flex min-h-screen items-center bg-gray-100 pb-16">
            <div className="mx-auto flex w-full max-w-xl flex-col px-4 sm:px-6">
                <Link href="/" aria-label="Home" className="mx-auto text-2xl font-bold">
                    <Logo mode={"dark"} />
                </Link>
                <div className="mx-auto mt-6 mb-4">
                    <LargeTitle>{title}</LargeTitle>
                </div>
                <div className="mx-auto mb-4">
                    {subtitle}
                </div>

                {children}
            </div>
        </main>
    )
}
