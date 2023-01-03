import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "@sazo/core/src/hooks/useAuth";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Button, LoadingSpinner, TextField } from "@sazo/ui";
import { FullPageLoading } from "../../components/Loaders/FullPageLoading";

export default function OrganizationPage() {
  const router = useRouter()

  const { user } = useAuth({ middleware: 'auth' })

  if (!user) {
    return <FullPageLoading />
  }

  if (user.user_type === 2) {
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>Organization - Sazo</title>
      </Head>

      <AuthLayout
        title={`Sorry ${user.full_name}`}
        subtitle={
          <>
            Je bent ingelogd als een organisatie. Dan kan je deze applicatie niet gebruiken
          </>
        }
      >
      </AuthLayout>
    </>
  )
}
