import React from "react";
import Layout from "../components/layout";
import { wrapper } from "../src/store/store";
import { fetch, Headers, Request, Response } from "cross-fetch";

Object.assign(globalThis, {
  fetch,
  Headers,
  Request,
  Response,
  AbortController,
});

export function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
const WrapComponent = wrapper.withRedux(MyApp);
export default WrapComponent;
