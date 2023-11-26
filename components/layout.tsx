import Head from "next/head";
import React from "react";
import MovieList from "./MovieList/movieList";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Movies</title>
      </Head>
      <MovieList />

      <div>{children}</div>
    </div>
  );
}
