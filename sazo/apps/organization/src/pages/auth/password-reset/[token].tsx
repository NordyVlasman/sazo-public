import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@sazo/core'
import { AuthLayout } from "../../../layouts/AuthLayout";
import { Button, TextField } from "@sazo/ui";

const PasswordReset = () => {
    const router = useRouter()

    const { resetPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        resetPassword({
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
            setStatus,
        })
    }

    useEffect(() => {
        const val = router.query.email
        if (val) {
            // @ts-ignore
            setEmail(val);
        } else {
            setEmail("");
        }
    }, [router.query.email])

    return (
        <AuthLayout
            title={""}
            subtitle={""}
        >
            {/* Session Status */}
            <div
                className={`mb-4 font-medium text-sm text-green-600`}>
                {status}
            </div>

            <form onSubmit={submitForm}>
                {/* Email Address */}
                <div>
                    <TextField
                        label={"Email"}
                        value={email}
                        type={"email"}
                        onChange={setEmail}
                        required
                        autoFocus
                    />
                </div>

                {/* Password */}
                <div className="mt-4">
                    <TextField
                        label={"Password"}
                        type={"password"}
                        value={password}
                        onChange={setPassword}
                        required
                    />
                </div>

                {/* Confirm Password */}
                <div className="mt-4">

                    <TextField
                        label={"Password"}
                        type={"password"}
                        value={passwordConfirmation}
                        onChange={setPasswordConfirmation}
                        required
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button submit primary>Reset Password</Button>
                </div>
            </form>
        </AuthLayout>
    )
}

export default PasswordReset