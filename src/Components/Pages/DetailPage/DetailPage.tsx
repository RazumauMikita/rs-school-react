import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { movieAPI } from '../../../apiService/MovieService';
import { appSlice } from '../../../store/reducers/AppSlice';
import { useAppDispatch } from '../../../hooks/redux';

const DetailPage: FC = () => {
  const { id } = useParams();
  const { data, isLoading } = movieAPI.useFetchMovieByIdQuery(Number(id));
  const { closeDetails } = appSlice.actions;
  const dispatch = useAppDispatch();
  const closeSideSection = () => {
    dispatch(closeDetails());
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
