import "../styles/globals.css";
import "../styles/editor.css";

import { AppPropsWithLayout } from "@sazo/types";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@sazo/core";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ToasterProvider from "../components/Toaster/ToasterProvider";

export default function App<T>({ Component, pageProps }: AppPropsWithLayout<T>): JSX.Element {
    const [client] = useState(() => queryClient());
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <QueryClientProvider client={client}>
            <Hydrate state={pageProps.dehydratedState}>
                <ToasterProvider />
                <ReactQueryDevtools initialIsOpen={true} />
                {getLayout(<Component {...pageProps} />, { ...pageProps })}
            </Hydrate>
        </QueryClientProvider>
    );
}
