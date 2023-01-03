import { FullPageLoading } from "../../components/Loaders/FullPageLoading";
import { MemberPageComponent } from "../../components/Member/PageComponent";
import { AppLayout, withUserAuthServerSideProps } from "../../layouts/AppLayout";
import Head from "next/head";
import { useGetMember, useGetOrganization, useGetUsername } from "@sazo/core";
import { PageWithLayout } from "@sazo/types";
import { useRouter } from "next/router";
import { OrganizationPageComponent } from "../../components/Organizations/PageComponent";

const OrganizationPage: PageWithLayout<any> = () => {
    const router = useRouter()

    const { data: organization } = useGetOrganization(router.query.id as string)

    if (!organization) return <FullPageLoading />

    return (
        <>
            <Head>
                <title>{organization?.name} - Sazo</title>
            </Head>

            <OrganizationPageComponent />
        </>
    )
}

OrganizationPage.getLayout = (page, pageProps) => {
    return <AppLayout {...pageProps}>{page}</AppLayout>
}

const fetchServerSideProps = async () => {
    return { props: {} };
};

export const getServerSideProps =
    withUserAuthServerSideProps(fetchServerSideProps);

export default OrganizationPage;
