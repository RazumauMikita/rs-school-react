import React, { FC } from "react";
import { useRouter } from "next/dist/client/router";

import { useFetchMovieByIdQuery } from "../src/apiService/MovieService";
import { appSlice } from "../src/store/reducers/AppSlice";
import { useAppDispatch } from "../src/hooks/redux";

const DetailPage: FC = () => {
  const router = useRouter();
  const id = router.query.movie;

  const { data, isFetching } = useFetchMovieByIdQuery(Number(id));
  const { closeDetails } = appSlice.actions;
  const dispatch = useAppDispatch();
  const closeSideSection = () => {
    dispatch(closeDetails());
    router.replace("/");
  };

  return (
    <div>
      <button onClick={closeSideSection}>CLOSE</button>
      {!isFetching ? (
        <div>
          <h1>{data?.data.movie.title}</h1>
          <p>Rating - {data?.data.movie.rating}</p>
          <p>Year - {data?.data.movie.year}</p>
          <p>Movie URL - {data?.data.movie.url}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailPage;
