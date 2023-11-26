import React from "react";
import { fetch, Headers, Request, Response } from "cross-fetch";

import Layout from "../components/layout";
import { wrapper } from "../src/store/store";

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
