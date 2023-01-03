import { PageWithLayout } from "@sazo/types";
import { AppLayout, withUserAuthServerSideProps } from "../../layouts/AppLayout";
import { Feed } from "../../components/Feed";
import Sidebar from "../../components/Sidebar";
import { LargeTitle } from "@sazo/ui";
import { ChatGridComponent } from "../../components/Chat/GridComponent";
import Head from "next/head";

const ChatPage: PageWithLayout<any> = () => {
  return (
    <>
        <Head>
            <title>Chats - Sazo</title>
        </Head>
        <ChatGridComponent />
    </>
  )
}

ChatPage.getLayout = (page, pageProps) => {
  return <AppLayout {...pageProps}>{page}</AppLayout>
}

const fetchServerSideProps = async () => {
  return { props: {} };
}

export const getServerSideProps = withUserAuthServerSideProps(fetchServerSideProps)

export default ChatPage
