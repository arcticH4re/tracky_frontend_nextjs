// next imports
import Head from "next/head";
import type { AppProps } from "next/app";

// react imports
import React from "react";
import { ToastContainer } from "react-toastify";

// custom components
import Layout from "../components/ui/layout/Layout";

// store
import { Provider } from "react-redux";
import { store } from "../store/store";

// other
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";

// styles
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>trackiE</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
