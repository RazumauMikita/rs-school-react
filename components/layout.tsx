import React from "react";
import Head from "next/head";

import styles from "./layout.module.css";

import TopBar from "./TopBar/TopBar";
import MovieList from "./MovieList/SSR/MovieList";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Movies</title>
      </Head>
      <div className={styles.mainContainer}>
        <TopBar />
        <MovieList />
      </div>
      <div className={styles.outletContainer}>{children}</div>
    </div>
  );
}
