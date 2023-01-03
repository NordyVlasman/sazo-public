import classNames from "classnames";
import Link from "next/link";
import { Avatar, Button, LargeTitle, TextField, Title3, UIText } from "@sazo/ui";
import { useGetOrganizations } from "@sazo/core/src/hooks/useGetOrganizations";
import { FullPageLoading } from "../Loaders/FullPageLoading";
import Image from "next/image";
import { states, workAreas } from "@sazo/core";

export function OrganizationGridComponent() {
    const getOrganizations = useGetOrganizations()

    const organizations = getOrganizations.data?.pages.map((page) => page.data).flat(2)

    if (!organizations) return <FullPageLoading />

    return (
        <>
            <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
                <main className="col-span-full">
                    <LargeTitle className="mb-6">
                        Aangesloten organisaties
                    </LargeTitle>
                    <div className="grid grid-cols-8 gap-3">
                        <div className="col-span-1 md:col-span-2">
                            <Title3>Filters</Title3>

                            <ul className={"mt-4 grid grid-row gap-2"}>
                                <UIText className={"mb-2"}>Provincies</UIText>
                                {states.map((state) => (
                                    <div className="inline-flex items-center gap-2" key={state.value}>
                                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                        <span>{state.label}</span>
                                    </div>
                                ))}
                            </ul>

                            <ul className="mt-4 grid grid-row gap-2">
                                <UIText className={"mb-2"}>Categorieën</UIText>

                                {workAreas.slice(0, 4).map((item) => (
                                    <div className="inline-flex items-center gap-2" key={item.value}>
                                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-5 md:col-span-6">
                            <div className="flex w-full justify-end mb-4">
                                <Title3>Resultaten</Title3>
                            </div>
                            {organizations && organizations.map((organization) => (
                                <>
                                    <Link
                                        href={`/organizations/${organization.id}`}
                                        key={organization.id}
                                        className="inline-flex items-center justify-between w-full"
                                    >
                                        <div className="inline-flex">
                                            <Image src={organization?.logo_url} alt={organization.name} width={120} height={50} />
                                            <div className="grid grid-rows pl-6">
                                                <UIText size={"text-lg"}>{organization.name}</UIText>
                                                <UIText size={"text-md"} tertiary>{`${organization.city}, ${organization.state}`}</UIText>
                                            </div>
                                        </div>
                                        <Button primary>
                                            Meer informatie
                                        </Button>
                                    </Link>
                                </>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
