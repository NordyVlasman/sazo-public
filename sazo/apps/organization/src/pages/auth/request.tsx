import { Button, TextField } from "@sazo/ui";
import { FormEvent, useCallback, useState } from "react";
import { useApplyOrganization, useAuth } from "@sazo/core";
import { PageWithLayout } from "@sazo/types";
import { AuthLayout } from "../../layouts/AuthLayout";

export default function RequestPage() {
    useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/'
    })

    const createOrganization = useApplyOrganization()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const onSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()

        createOrganization.mutate({ name, email }, {
            onSuccess: () => {
                setName("")
                setEmail("")
            }
        })

    }, [createOrganization])

    return (
        <>
            <AuthLayout title={"Vraag je organisatie aan"} subtitle={""}>
                <form onSubmit={onSubmit} className="relative flex flex-col bg-white shadow rounded-xl px-6 py-6 space-y-4">
                    <TextField
                        label={"Naam"}
                        value={name}
                        onChange={setName}
                        required
                    />
                    <TextField
                        label={"Email"}
                        value={email}
                        onChange={setEmail}
                        required
                    />
                    <div className="min-h-6">
                        <Button
                            fullWidth
                            primary
                            submit
                        >
                            Aanvragen
                        </Button>
                    </div>
                </form>
            </AuthLayout>
        </>
    );
}
