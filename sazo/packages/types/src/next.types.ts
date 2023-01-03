import { DehydratedState, QueryClient } from "@tanstack/react-query";
import { GetServerSidePropsContext, NextPage } from "next";
import { AppProps } from "next/app";
import React, { ReactElement } from "react";
import { User } from "./user.types";

export type AppPropsWithLayout<T> = AppProps & {
    Component: NextPageWithLayout<T>;
}

export type NextPageWithLayout<T> = NextPage & {
    getLayout?: (page: ReactElement, props: T) => React.ReactNode
}

export type PageWithLayout<T> = React.FC<T> & NextPageWithLayout<T>;

export type FetchServerSidePropsContext = GetServerSidePropsContext & {
    client: QueryClient;
}

export type AuthProps = {
    currentUser: User;
    dehydratedState: DehydratedState;
}
