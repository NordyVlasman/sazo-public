import { useState } from "react";
import { AvatarUploader } from "../AvatarUploader";
import toast from "react-hot-toast";
import { useGetCurrentUser, useUpdateCurrentUser } from "@sazo/core";
import { TransformedFile } from "@sazo/types";
import * as SettingsSection from '../SettingsSection'
import { Button, FormError, MutationError, TextField, Tooltip } from "@sazo/ui";

export function ProfileDisplay() {
    const { data: currentUser } = useGetCurrentUser()
    const updateCurrentUser = useUpdateCurrentUser()

    const [username, setUsername] = useState(currentUser.username)
    const [firstName, setFirstName] = useState(currentUser.first_name)
    const [lastName, setLastName] = useState(currentUser.last_name)
    const [email, setEmail] = useState(currentUser.email)
    const [tagline, setTagline] = useState(currentUser.tagline)

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
        username !== currentUser?.username ||
        email !== currentUser?.email ||
        firstName !== currentUser?.first_name ||
        lastName !== currentUser?.last_name ||
        tagline !== currentUser?.tagline

    const disabledSubmit =
        !hasChanges ||
        updateCurrentUser.isLoading ||
        !username ||
        !email ||
        !!fileError ||
        (file ? !file.key : false);

    function handleSubmit(event: any) {
        event.preventDefault()

        setFileError(null)

        updateCurrentUser.mutate(
            {
                avatar_path: file?.key,
                email,
                first_name: firstName,
                last_name: lastName,
                username,
                tagline: tagline,
            },
            {
                onSuccess: async () => {
                    toast.success("Profile updated")
                },
                onError: (error: any) => {
                    toast.error(error.message)
                }
            }
        )
    }

    return (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col items-start pt-2 pb-6 sm:flex-row">
                <div className="flex flex-col w-full mt-5 space-y-5 sm:mt-0">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="inline-flex">
                            <AvatarUploader
                                onFileUploadSuccess={onFileUploadSuccess}
                                onFileUploadError={onFileUploadError}
                                src={currentUser?.avatar_url}
                                onFileUploadStart={(file) => {
                                    setFile(file)
                                    setFileError(null)
                                }}
                                resource="User"
                            />
                        </div>
                        <TextField
                            type="text"
                            id="first_name"
                            name="firstName"
                            label="Voornaam"
                            value={firstName}
                            placeholder="Je voornaam"
                            onChange={(value) => setFirstName(value)}
                            required
                            max={32}
                            colSpan={"col-span-2"}
                        />

                        <TextField
                            type="text"
                            id="last_name"
                            name="lastName"
                            label="Achternaam"
                            value={lastName}
                            placeholder="Je achternaam"
                            onChange={(value) => setLastName(value)}
                            required
                            max={32}
                            colSpan={"col-span-2"}
                        />

                        <TextField
                            type="email"
                            id="email"
                            name="email"
                            label="Email"
                            value={email}
                            placeholder="Je email adres"
                            onChange={(value) => setEmail(value)}
                            required
                        />

                        <TextField
                            type="text"
                            multiline
                            value={tagline}
                            onChange={(value) => setTagline(value)}
                            placeholder="Beschrijving (optioneel)"
                            label="Beschrijving"
                            max={280}
                            min={2}
                            minRows={2}
                        />

                    </div>

                    {fileError && <FormError>{fileError.message}</FormError>}

                    {updateCurrentUser.isError && (
                        <FormError>
                            <MutationError mutation={updateCurrentUser} />
                        </FormError>
                    )}
                </div>
            </div>
            <div className="inline-flex w-full justify-end">
                    <Button
                        submit
                        primary
                        disabled={disabledSubmit}
                    >
                        Opslaan
                    </Button>
            </div>
        </form>
    )
}
