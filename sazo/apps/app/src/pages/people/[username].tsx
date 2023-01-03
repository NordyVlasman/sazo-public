import { FullPageLoading } from "../../components/Loaders/FullPageLoading";
import { MemberPageComponent } from "../../components/Member/PageComponent";
import { AppLayout, withUserAuthServerSideProps } from "../../layouts/AppLayout";
import Head from "next/head";
import { useGetMember, useGetUsername } from "@sazo/core";
import { PageWithLayout } from "@sazo/types";

const PersonPage: PageWithLayout<any> = () => {
    const username = useGetUsername()
    const getMember = useGetMember(username as string)
    const member = getMember.data

    if (!member) return <FullPageLoading />

    return (
        <>
            <Head>
                <title>{member?.full_name} - Sazo</title>
            </Head>

            <MemberPageComponent />
        </>
    )
}

PersonPage.getLayout = (page, pageProps) => {
    return <AppLayout {...pageProps}>{page}</AppLayout>
}

const fetchServerSideProps = async () => {
    return { props: {} };
};

export const getServerSideProps =
    withUserAuthServerSideProps(fetchServerSideProps);

export default PersonPage;
