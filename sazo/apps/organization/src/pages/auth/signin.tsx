import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "@sazo/core";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Button, TextField } from '@sazo/ui'

export default function LoginPage() {
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
        title="Log in als organisatie"
        subtitle={
          <>
            Nog niet geregistreerd? {' '}
            <Link href="/auth/request" className="text-blue-500">
              Vraag nu een account aan
            </Link>
          </>
        }
      >
          <form onSubmit={submitForm} className="relative flex flex-col bg-white shadow rounded-xl px-6 py-6 space-y-4">
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

            <Button submit fullWidth primary>
              Log in
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
