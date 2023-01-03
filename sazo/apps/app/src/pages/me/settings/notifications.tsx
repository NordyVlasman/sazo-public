import { ProfileDisplay } from "../../../components/UserSettings/ProfileDisplay";
import { withUserAuthServerSideProps } from "../../../layouts/AppLayout";
import { UserSettingsLayout } from "../../../layouts/UserSettingsLayout";
import Head from "next/head";
import { FetchServerSidePropsContext, PageWithLayout } from "@sazo/types";

const UserNotificationSettingsPage: PageWithLayout<any> = () => {
    return (
        <>
            <Head>
                <title>Profiel instellingen</title>
            </Head>

            {/*<ProfileDisplay />*/}
        </>
    )
}

UserNotificationSettingsPage.getLayout = (page, pageProps) => {
    return <UserSettingsLayout {...pageProps}>{page}</UserSettingsLayout>
}

const fetchServerSideProps = async ({
                                        client
                                    }: FetchServerSidePropsContext) => {
    return {
        props: {}
    }
}

export const getServerSideProps = withUserAuthServerSideProps(fetchServerSideProps)

export default UserNotificationSettingsPage
