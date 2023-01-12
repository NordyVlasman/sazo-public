import "../styles/globals.css";
import "../styles/editor.css";

import { AppPropsWithLayout } from "@sazo/types";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@sazo/core";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ComposerDialogProvider } from "../contexts/composer";
import { CommentsDialogProvider } from "../contexts/comments";
import { ComposerGlobalDropzone } from "../components/Composer/ComposerGlobalDropzone";
import { ComposerDialog } from "../components/Composer/ComposerDialog";
import { Inter } from '@next/font/google';
import ToasterProvider from "../components/Toast/ToastProvider";
import { FullPageLoading } from "../components/Loaders/FullPageLoading";

const inter = Inter({ subsets: ['latin'] })

export default function App<T>({
  Component,
  pageProps
}: AppPropsWithLayout<T>): JSX.Element {
  const [client] = useState(() => queryClient())
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <QueryClientProvider client={client}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={true} />
        <ComposerDialogProvider>
          <ToasterProvider />
          <CommentsDialogProvider>
          <ComposerGlobalDropzone />
            <ComposerDialog />
            <main className={inter.className}>
              {getLayout(<Component {...pageProps} />, { ...pageProps })}
            </main>
          </CommentsDialogProvider>
        </ComposerDialogProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}