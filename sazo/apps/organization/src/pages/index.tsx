import { PageWithLayout } from "@sazo/types";
import { AppLayout, withUserAuthServerSideProps } from "../layouts/AppLayout";
import { OrganizationDisplay } from "../components/OrganizationSettings/OrganizationDisplay";
import { useGetCurrentUser, useGetOrganization } from "@sazo/core";

const HomePage: PageWithLayout<any> = () => {
    const { data: currentUser } = useGetCurrentUser()
    const { data: org } = useGetOrganization(currentUser.organization)
    return (
        <>
            <div className="w-full max-w-5xl px-4 py-8 pb-32 mx-auto">
                {org && (
                    <OrganizationDisplay />
                )}
            </div>
        </>
    )
}

HomePage.getLayout = (page, pageProps) => {
        return <AppLayout {...pageProps}>{page}</AppLayout>
}

const fetchServerSideProps = async () => {
    return { props: {} };
}

export const getServerSideProps = withUserAuthServerSideProps(fetchServerSideProps)

export default HomePage
