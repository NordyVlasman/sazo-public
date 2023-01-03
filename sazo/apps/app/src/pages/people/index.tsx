import { MemberGridComponent } from "../../components/Member/GridComponent";
import { AppLayout, withUserAuthServerSideProps } from "../../layouts/AppLayout";
import Head from "next/head";
import { LargeTitle } from "@sazo/ui";
import { PageWithLayout } from "@sazo/types";

const PeoplePage: PageWithLayout<any> = () => {
    return (
        <>
            <Head>
                <title>People - Sazo</title>
            </Head>

            <div className="w-full">
                <div className="flex items-center justify-between w-full px-4 py-3 mx-auto sm:py-8 max-w-6xl">
                    <LargeTitle className="leading-none">People</LargeTitle>
                </div>
            </div>

            <MemberGridComponent />
        </>
    )
}

PeoplePage.getLayout = (page, pageProps) => {
    return <AppLayout {...pageProps}>{page}</AppLayout>
}

const fetchServerSideProps = async () => {
    return { props: {} };
}

export const getServerSideProps = withUserAuthServerSideProps(fetchServerSideProps);

export default PeoplePage
