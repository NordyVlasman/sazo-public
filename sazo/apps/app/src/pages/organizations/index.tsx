import { MemberGridComponent } from "../../components/Member/GridComponent";
import { AppLayout, withUserAuthServerSideProps } from "../../layouts/AppLayout";
import Head from "next/head";
import { LargeTitle } from "@sazo/ui";
import { PageWithLayout } from "@sazo/types";
import { OrganizationGridComponent } from "../../components/Organizations/GridComponent";

const OrganizationsPage: PageWithLayout<any> = () => {
  return (
    <>
      <Head>
        <title>Organisaties - Sazo</title>
      </Head>

      <OrganizationGridComponent />
    </>
  )
}

OrganizationsPage.getLayout = (page, pageProps) => {
  return <AppLayout {...pageProps}>{page}</AppLayout>
}

const fetchServerSideProps = async () => {
  return { props: {} };
}

export const getServerSideProps = withUserAuthServerSideProps(fetchServerSideProps);

export default OrganizationsPage
