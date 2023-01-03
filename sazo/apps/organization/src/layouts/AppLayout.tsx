import { dehydrate } from "@tanstack/react-query";
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { ApiErrorTypes, AuthProps, FetchServerSidePropsContext, User } from "@sazo/types";
import { apiUrl, queryClient } from "@sazo/core";
import { NavigationBar } from "../components/NavigationBar";

type Props = {
  children: React.ReactNode;
}

export function AppLayout(props: Props) {
  const { children } = props

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavigationBar />
      {children}
    </div>
  )
}

export function withUserAuthServerSideProps<P>(
  getServerSideProps: (
    context: FetchServerSidePropsContext
  ) => Promise<GetServerSidePropsResult<P>>
): GetServerSideProps<AuthProps & P> {
  return async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<AuthProps & P>> => {
    const { req } = context
    // @ts-ignore
    const client = queryClient(req?.cookies)

    try {
      const [currentUser, results] = await Promise.all([
        client.fetchQuery([apiUrl("/api/v1/me")]),
        getServerSideProps({ ...context, client })
      ])

      const props = "props" in results ? await results.props : undefined;

      // See this as some kind of middleware to make sure
      // organizations don't log in to the main application.
      const user = currentUser as User;

      if (user.user_type === 2) {
        return {
          redirect: {
            permanent: false,
            destination: '/auth/organization'
          }
        }
      }

      return {
        ...results,
        props: {
          currentUser,
          dehydratedState: dehydrate(client),
          ...props,
        }
      } as GetServerSidePropsResult<P & AuthProps>;
    } catch (e: any) {
      if (e.name === ApiErrorTypes.AuthenticationError) {
        return {
          redirect: {
            permanent: false,
            destination: '/auth/signin'
          }
        }
      } else {
        throw e;
      }
    }
  }
}