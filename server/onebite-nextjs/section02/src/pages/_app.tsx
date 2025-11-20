import type { AppProps } from "next/app";
import type { NextPage } from "next";
import GlobalLayout from "@/components/GlobalLayout";
import "@/styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

export default function App({ Component, pageProps }: AppProps & { Component: NextPageWithLayout }) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    <GlobalLayout>
      {getLayout(<Component {...pageProps} />)} 
    </GlobalLayout>
  );
}
