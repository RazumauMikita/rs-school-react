import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants/routes';

const MainPage: FC = () => {
  return (
    <>
      <h1>MainPage</h1>

      <Link to={ROUTES.REACT_HOOK_FORM_PAGE}>To Form Page</Link>
      <Link to={ROUTES.UNCONTROLLED_FORM_PAGE}>To Form Page</Link>
    </>
  );
};

export default MainPage;
