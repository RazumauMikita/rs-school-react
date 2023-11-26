import { GetServerSideProps } from "next";

import { wrapper } from "../../../src/store/store";
import {
  fetchAllMovies,
  getRunningQueriesThunk,
} from "../../../src/apiService/MovieService";
import { AllMoviesResponse } from "../../../src/apiService/MovieService.type";

import MovieList from "../movieList";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { params } = context;
    const limit = params?.limit ? Number(params.limit) : 3;
    const page = params?.page ? Number(params.page) : 1;
    const search = typeof params?.search === "string" ? params.search : "";

    let { data } = await store.dispatch(
      fetchAllMovies.initiate({ limit, page, search })
    );
    if (!data) throw new Error("No data!");
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: { data },
    };
  }
) satisfies GetServerSideProps<{
  data: AllMoviesResponse;
}>;

export default MovieList;
