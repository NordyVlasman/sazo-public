import * as SettingsSection from '../SettingsSection'
import VerifiedDomain from "./VerifiedDomain";
import { useState } from "react";
import { Organization, TransformedFile, User } from "@sazo/types";
import { useGetCurrentUser, useGetMember, useGetOrganization, useUpdateOrganization } from "@sazo/core";
import { Button, FormError, MutationError, TextField, Tooltip } from "@sazo/ui";
import { AvatarUploader } from "../AvatarUploader";
import toast from "react-hot-toast";
import { Simulate } from "react-dom/test-utils";
import submit = Simulate.submit;

export function OrganizationDisplay() {
    const { data: currentUser } = useGetCurrentUser()
    const { data: organization } = useGetOrganization(currentUser.organization)

    const updateOrganization = useUpdateOrganization()

    const [name, setName] = useState(organization?.name)
    const [websiteUrl, setWebsiteUrl] = useState(organization?.website_url)
    const [description, setDescription] = useState(organization?.description)
    const [city, setCity] = useState(organization?.city)
    const [address, setAddress] = useState(organization?.address_street_1)
    const [state, setState] = useState(organization?.state)
    const [zip, setZip] = useState(organization?.zip)
    const [phone, setPhone] = useState(organization?.phone)

    const [file, setFile] = useState<TransformedFile | null>(null)
    const [fileError, setFileError] = useState<Error | null>(null);

    function onFileUploadSuccess(file: TransformedFile, key: string | null) {
        setFile({ ...file, key })
        setFileError(null)
    }

    function onFileUploadError(_file: TransformedFile, error: Error) {
        setFileError(error);
    }

    const hasChanges =
        file ||
        name !== organization?.name ||
        phone !== organization?.phone ||
        websiteUrl !== organization?.website_url ||
        city !== organization?.city ||
        address !== organization?.address_street_1 ||
        state !== organization?.state ||
        zip !== organization?.zip ||
        description !== organization?.description

    const disabledSubmit =
        !hasChanges ||
        !!fileError ||
        (file ? !file.key : false);


    function handleSubmit(event: any) {
        event.preventDefault()

        setFileError(null)

        updateOrganization.mutate(
            {
                id: organization.id,
                avatar_path: file?.key,
                name,
                website_url: websiteUrl,
                description,
                country: "Netherlands",
                address_street_1: address,
                city,
                state,
                zip,
                phone
            }, {
                onSuccess: async () => {
                    toast.success("Organization updated")
                }
            }
        )
    }

    return (
        <>
            <div className="space-y-8">
                <SettingsSection.Section>
                    <SettingsSection.Header>
                        <SettingsSection.Title>Organisatie informatie</SettingsSection.Title>
                    </SettingsSection.Header>
                    <SettingsSection.Description>
                        Het is belangrijk dat alles duidelijk wordt ingevuld zodat toekomstige studenten
                        weten wat ze kunnen bij je bedrijf.
                    </SettingsSection.Description>
                    <SettingsSection.Separator />

                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="flex flex-col items-start px-4 pt-2 pb-6 sm:pl-6 sm:space-x-6 sm:flex-row">
                            <AvatarUploader
                                onFileUploadSuccess={onFileUploadSuccess}
                                onFileUploadError={onFileUploadError}
                                src={organization?.logo_url}
                                onFileUploadStart={(file) => {
                                    setFile(file)
                                    setFileError(null)
                                }}
                                resource="Organization"
                            />
                            <div className="flex flex-col w-full max-w-lg mt-5 space-y-5 sm:mt-0">
                                <div className="grid grid-cols-2 gap-2">
                                    <TextField
                                        type="text"
                                        id="name"
                                        name="name"
                                        label="Naam"
                                        value={name}
                                        placeholder="Naam"
                                        onChange={(value) => setName(value)}
                                        required
                                        max={32}
                                        colSpan={"col-span-1"}
                                    />

                                    <TextField
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        label="Telefoonnummer"
                                        value={phone}
                                        placeholder="Telefoonnummer"
                                        onChange={(value) => setPhone(value)}
                                        max={32}
                                        colSpan={"col-span-1"}
                                    />

                                    <TextField
                                        type="text"
                                        id="website_url"
                                        name="website_url"
                                        label="Website URL"
                                        value={websiteUrl}
                                        placeholder="Website URL"
                                        onChange={(value) => setWebsiteUrl(value)}
                                        max={32}
                                        colSpan={"col-span-2"}
                                    />

                                    <TextField
                                        type="text"
                                        multiline
                                        value={description}
                                        onChange={(value) => setDescription(value)}
                                        placeholder="Beschrijving (optioneel)"
                                        label="Beschrijving"
                                        max={280}
                                        min={2}
                                        minRows={2}
                                    />

                                    <div className="col-span-2">
                                        <SettingsSection.Separator />
                                    </div>

                                    <TextField
                                        type="text"
                                        id="city"
                                        name="city"
                                        label="Stad"
                                        value={city}
                                        placeholder="Locatie van het bedrijf"
                                        onChange={(value) => setCity(value)}
                                        max={32}
                                        colSpan={"col-span-1"}
                                    />

                                    <TextField
                                        type="text"
                                        id="state"
                                        name="state"
                                        label="Provincie"
                                        value={state}
                                        placeholder="Provincie waar het bedrijf staat"
                                        onChange={(value) => setState(value)}
                                        max={32}
                                        colSpan={"col-span-1"}
                                    />

                                    <TextField
                                        type="text"
                                        id="zip"
                                        name="zip"
                                        label="Postcode"
                                        value={zip}
                                        placeholder="postcode"
                                        onChange={(value) => setZip(value)}
                                        max={32}
                                        colSpan={"col-span-2"}
                                    />

                                    <TextField
                                        type="text"
                                        multiline
                                        value={address}
                                        onChange={(value) => setAddress(value)}
                                        placeholder="Adres"
                                        label="Adres"
                                        max={280}
                                        min={2}
                                        minRows={2}
                                    />
                                </div>

                                {fileError && <FormError>{fileError.message}</FormError>}

                            </div>
                        </div>

                        <SettingsSection.Footer>
                            <div className="w-full sm:w-auto">
                                <Button
                                    submit
                                    fullWidth
                                    primary
                                    disabled={disabledSubmit}
                                >
                                    Opslaan
                                </Button>
                            </div>
                        </SettingsSection.Footer>
                    </form>
                </SettingsSection.Section>

                <VerifiedDomain />
            </div>
        </>
    )
}