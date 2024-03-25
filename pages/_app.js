import GlobalStyle from "../styles";
import Layout from "@/Components/Layout";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
        <SWRConfig value={{ fetcher }}>
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </SessionProvider>
    </>
  );
}
