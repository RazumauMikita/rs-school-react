import { FC } from "react";
import { useFetchMovieByIdQuery } from "../src/apiService/MovieService";
import { appSlice } from "../src/store/reducers/AppSlice";
import { useAppDispatch } from "../src/hooks/redux";
import React from "react";
import { useRouter } from "next/dist/client/router";

const DetailPage: FC = () => {
  const router = useRouter();
  const id = router.query.movie;

  const { data, isLoading } = useFetchMovieByIdQuery(Number(id));
  const { closeDetails } = appSlice.actions;
  const dispatch = useAppDispatch();
  const closeSideSection = () => {
    dispatch(closeDetails());
    router.replace("/");
  };

  return (
    <div>
      <button onClick={closeSideSection}>CLOSE</button>
      {!isLoading ? (
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
