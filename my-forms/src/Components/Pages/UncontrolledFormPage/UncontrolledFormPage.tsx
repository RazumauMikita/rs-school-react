import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants/routes';

const UncontrolledFormPage: FC = () => {
  return (
    <>
      <h1>Uncontrolled Form Page</h1>
      <Link to={ROUTES.MAIN_PAGE}>To Main Page</Link>
    </>
  );
};

export default UncontrolledFormPage;
