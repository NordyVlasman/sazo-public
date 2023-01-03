import {useRouter} from "next/router";
import {useState} from "react";
import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";
import { RadioGroup } from "@headlessui/react";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Button, TextField } from "@sazo/ui";
import { useAuth } from "@sazo/core";
const Signup = () => {
    const router = useRouter()
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/'
    })

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = async event => {
        event.preventDefault()

        await register({ firstName, lastName, email, password, password_confirmation: passwordConfirmation, setErrors, setStatus })
    }

    return (
        <>
            <Head>
                <title>Sign up - Sazo</title>
            </Head>
            <AuthLayout
                title="Sign up to Sazo"
                subtitle={
                    <>
                        Already have an account?{' '}
                        <Link href="/auth/signin" legacyBehavior>
                            <a className="text-blue-600">
                                Sign in
                            </a>
                        </Link>
                    </>
                }
            >
                <form onSubmit={submitForm}>
                    <div className="grid grid-cols-2 gap-6">
                        <TextField
                            type="text"
                            value={firstName}
                            onChange={setFirstName}
                            placeholder="Beau"
                            label="First name"
                            max={32}
                            min={2}
                            colSpan={"col-span-1"}
                            onCommandEnter={submitForm}
                        />

                        <TextField
                            type="text"
                            value={lastName}
                            onChange={setLastName}
                            placeholder="Therham"
                            label="Last name"
                            max={32}
                            min={2}
                            colSpan={"col-span-1"}
                            onCommandEnter={submitForm}
                        />

                        <TextField
                            type="email"
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

                        <TextField
                            type="password"
                            value={passwordConfirmation}
                            onChange={setPasswordConfirmation}
                            placeholder="password"
                            label="Confirm Password"
                            max={32}
                            min={2}
                            onCommandEnter={submitForm}
                        />


                        <div className="col-span-full">
                            <Button
                                submit
                                fullWidth
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            </AuthLayout>
        </>
    )
}

export default Signup
