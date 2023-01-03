import * as SettingsSection from "../../SettingsSection";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Button, InformationIcon, TextField, UIText } from "@sazo/ui";
import { useGetCurrentUser } from "@sazo/core";
import Link from "next/link";

export default function VerifiedDomain() {
    const { data: currentUser } = useGetCurrentUser()

    const [expanded, setExpanded] = useState(false);
    const enabled = expanded;

    const organizationEmailDomain = 'aliade.nl'

    return (
        <SettingsSection.Section>
            <SettingsSection.Header>
                <SettingsSection.Title>Domein specifieke accounts</SettingsSection.Title>
                <Switch
                    checked={enabled}
                    onChange={() => {
                        setExpanded(!expanded);
                    }}
                    className={`${enabled ? "bg-violet-500" : "bg-neutral-200"}
          relative inline-flex h-[28px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-150 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-150 ease-in-out`}
                    />
                </Switch>
            </SettingsSection.Header>


            <div className="h-1" />

            <SettingsSection.Description>
                Domein specifieke accounts maakt het mogelijk voor gebruikers om zich te koppelen aan de organisatie
                als ze een account hebben met een domein specifiek email.
            </SettingsSection.Description>

            {!enabled && <div className="h-4" />}

            {enabled && (
                <>
                    <SettingsSection.Separator />

                    <form className="flex flex-col" onSubmit={() => console.log()}>
                        <div className="max-w-lg px-3">
                            <TextField
                                type="text"
                                id="email_domain"
                                name="email_domain"
                                label="Email domain"
                                labelHidden={true}
                                value={organizationEmailDomain}
                                placeholder={`e.g. ${currentUser?.email.split("@")[1]}`}
                            />
                        </div>

                        {/*{!organization?.email_domain && (*/}
                            <div className="flex items-start max-w-lg px-3 pt-3 space-x-1 text-blue-600">
                                <div className="flex-none">
                                    <InformationIcon />
                                </div>
                                <UIText tertiary>
                                    {`Het ingevulde domein moet gelijk zijn aan (${
                                        currentUser?.email.split("@")[1]
                                    }) voor security.`}{" "}
                                    <Link
                                        href={""}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Learn more
                                    </Link>
                                </UIText>
                            </div>
                        {/*)}*/}

                        <div className="h-4" />

                        <SettingsSection.Footer>
                            <div className="w-full sm:w-auto">
                                <Button
                                    fullWidth
                                    submit
                                    primary
                                    // loading={updateOrganization.isLoading}
                                    // disabled={disabledSubmit}
                                >
                                    Save
                                </Button>
                            </div>
                        </SettingsSection.Footer>
                    </form>
                </>
            )}
        </SettingsSection.Section>
    )
}