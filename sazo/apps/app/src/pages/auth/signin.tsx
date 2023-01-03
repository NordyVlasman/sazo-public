import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "@sazo/core/src/hooks/useAuth";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Button, TextField } from '@sazo/ui'

export default function LoginPage() {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/'
    })

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = async event => {
        event.preventDefault()

        await login({ email, password, remember: true, setErrors, setStatus })
    }

    return (
        <>
            <Head>
                <title>Log in - Sazo</title>
            </Head>

            <AuthLayout
                title="Log in op je account"
                subtitle={
                    <>
                        Heb je geen account? {' '}
                        <Link href="/auth/signup" className="text-blue-500">
                            Registreer nu
                        </Link> { ' ' }
                        om vragen te stellen.
                    </>
                }
            >
                <form onSubmit={submitForm}>
                    <div className="space-y-6">
                        <TextField
                            type='email'
                            value={email}
                            onChange={setEmail}
                            placeholder="beau@ter.ham"
                            label="Email"
                            max={32}
                            min={2}
                            onCommandEnter={submitForm}
                        />

                        <TextField
                            type="password"
                            value={password}
                            onChange={setPassword}
                            placeholder="password"
                            label="Password"
                            max={32}
                            min={2}
                            onCommandEnter={submitForm}
                        />

                        <Button submit fullWidth>
                            Log in
                        </Button>
                    </div>
                </form>
            </AuthLayout>
        </>
    )
}
