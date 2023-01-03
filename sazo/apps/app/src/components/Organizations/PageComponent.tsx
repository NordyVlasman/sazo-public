import { useRouter } from "next/router";
import { careerCategories, useGetOrganization, workAreas } from "@sazo/core";
import { ArrowLeftIcon, Button, LargeTitle, Title2, Title3, UIText } from "@sazo/ui";
import Link from "next/link";
import Image from "next/image";
import { FullPageLoading } from "../Loaders/FullPageLoading";
import { OrganizationMembers } from "./OrganizationMembers";
import Sidebar from "../Sidebar";

export function OrganizationPageComponent() {
    const router = useRouter()
    const { data: organization } = useGetOrganization(router.query.id as string)

    const items = [
        ...careerCategories.slice(0, 2),
        ...workAreas.slice(0, 2)
    ]

    if (!organization) <FullPageLoading />

    return (
        <>
            <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
                <main className="lg:col-span-9 xl:col-span-9">
                    <Link
                        href={`/organizations`}
                        className={"inline-flex"}
                    >
                        <>
                            <ArrowLeftIcon /> Terug naar overzicht
                        </>
                    </Link>
                    <div className="mt-4">

                    <Image width={140} height={42} src={organization?.logo_url} alt={organization?.name} className={"p-2 rounded-md border border-neutral-100"}/>
                        <div className="mt-6 space-y-2">
                            <Title2>{organization?.name}</Title2>
                            <UIText>
                                {organization?.description}
                            </UIText>

                            <div className={"inline-flex gap-2 pt-4"}>
                                <Button
                                    primary
                                >
                                    Mail de organisatie
                                </Button>
                                <Link
                                    target={"_blank"}
                                    className="focus-visible:ring-2 h-8 inline-flex items-center justify-center focus-visible:outline-none border focus-visible:border-blue-500 leading-none touch-none select-none text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed w-auto flex-none px-3.5 focus-visible:ring-blue-100 rounded-md bg-black bg-opacity-5 disabled:hover:bg-opacity-5 hover:bg-opacity-10 border-transparent text-neutral-800 hover:text-black"
                                    href={organization?.website_url}
                                >
                                    <span>Ga naar de website</span>
                                </Link>
                            </div>
                        </div>

                        <OrganizationMembers organization={organization}/>
                    </div>
                </main>
                <aside className="hidden xl:col-span-3 xl:block">
                    <Sidebar />
                </aside>
            </div>
        </>
    )
}
