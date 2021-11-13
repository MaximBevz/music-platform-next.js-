import Layout from "../components/Layout";
import '../styles/globals.scss'
import Head from "next/head";
import {AppProps} from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
      <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
      </Head>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp;
