import { FC } from 'react';
import { Link } from 'react-router-dom';

const MainPage: FC = () => {
  return (
    <>
      <h1>MainPage</h1>

      <Link to={'/react-hook-form'}>To Form Page</Link>
      <Link to={'/uncontrolled-form'}>To Form Page</Link>
    </>
  );
};

export default MainPage;
