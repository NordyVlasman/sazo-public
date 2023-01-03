import { PageWithLayout } from "@sazo/types";
import { AppLayout, withUserAuthServerSideProps } from "../layouts/AppLayout";
import { Feed } from "../components/Feed";
import Sidebar from "../components/Sidebar";

const HomePage: PageWithLayout<any> = () => {
  return (
    <>
        <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            <main className="lg:col-span-9 xl:col-span-9">
                <Feed
                uploadable
                queryKey="/api/v1/post"
                />
            </main>
            <aside className="hidden xl:col-span-3 xl:block">
                <Sidebar uploadable />
            </aside>
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
