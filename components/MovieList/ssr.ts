import MovieList from "./movieList";
import { wrapper } from "../../src/store/store";
import {
  fetchAllMovies,
  getRunningQueriesThunk,
} from "../../src/apiService/MovieService";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const limit = context.params?.limit;
    const page = context.params?.page;
    const search = context.params?.search;
    if (
      typeof search === "string" &&
      typeof limit === "number" &&
      typeof page === "number"
    ) {
      store.dispatch(fetchAllMovies.initiate({ limit, page, search }));
    }
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  },
);

export default MovieList;
