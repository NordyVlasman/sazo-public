import { careerCategories, useGetPost, workAreas } from "@sazo/core";
import { PageWithLayout } from "@sazo/types";
import { AppLayout, withUserAuthServerSideProps } from "../layouts/AppLayout";
import { Feed } from "../components/Feed";
import { GlobeAltIcon, MagnifyingGlassIcon, UsersIcon } from "@heroicons/react/20/solid";
import { BookmarkIcon, Button, ChevronUpIcon, LargeTitle, PencilIcon, PlusIcon, Title3, UIText } from "@sazo/ui";
import Link from "next/link";
import { ComposerDialogActionType, useComposer } from "../contexts/composer";
import Sidebar from "../components/Sidebar";
import classNames from "classnames";
import { Disclosure } from '@headlessui/react'
import { useState } from "react";
import GeneralItems from "../components/Faq/item";

const HelpPage: PageWithLayout<any> = () => {
    const [selected, setSelected] = useState("general")
    const navLinks = [
        {
            action: () => setSelected("general"),
            active: selected === "general",
            label: "Algemeen"
        },
        {
            action: () => setSelected("information"),
            active: selected === "information",
            label: "Informatie zoeken"
        },
        {
            action: () => setSelected("messages"),
            active: selected === "messages",
            label: "Berichten maken"
        },
        {
            action: () => setSelected("answers"),
            active: selected === "answers",
            label: "Vragen beantwoorden"
        }
    ]

    const renderTitle = () => {
        switch (selected) {
            case "messages": return 'Berichten maken';
            case "answers": return "Vragen beantwoorden"
            case "information": return "Informatie zoeken"
            case "general": return "Algemeen"
        }
    }

    return (
        <>
            <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
                <aside className="col-span-2">
                    <div
                        className={classNames(
                            "mx-top-14 z-10 flex flex-col gap-2"
                        )}
                    >
                            {navLinks.map((link) => (
                                <button
                                    onClick={link.action}
                                    key={link.label}
                                    className={classNames(
                                        "block pl-4 -ml-px py-0.5 border-l-2 text-left",
                                        {
                                            "text-opacity-100 border-opacity-100 border-l-violet-500 before:border-opacity-100 text-zinc-900":
                                            link.active,
                                            "text-opacity-50 hover:text-opacity-80 hover:border-l-opacity-50 hover:border-l-zinc-500":
                                                !link.active,
                                        }
                                    )}
                                >
                                    {link.label}
                                </button>
                            ))}
                    </div>
                </aside>
                <main className="lg:col-span-9 xl:col-span-7">
                    <div className="flex items-center justify-between w-full pb-2 border-b border-gray-200">
                        <LargeTitle className="leading-none">
                            {renderTitle()}
                        </LargeTitle>
                    </div>

                    <div className="w-full grid grid-cols">
                        <GeneralItems selected={selected} />
                    </div>
                </main>
            </div>
        </>
    )
}

HelpPage.getLayout = (page, pageProps) => {
    return <AppLayout {...pageProps}>{page}</AppLayout>
}

const fetchServerSideProps = async () => {
    return { props: {} };
}

export const getServerSideProps = withUserAuthServerSideProps(fetchServerSideProps)

export default HelpPage
