import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../utils/constants/routes';

import UncontrolledForm from '../../Forms/UncontrolledForm/UncontrolledForm';

const UncontrolledFormPage: FC = () => {
  return (
    <>
      <h1>Uncontrolled Form Page</h1>
      <Link to={ROUTES.MAIN_PAGE}>To Main Page</Link>
      <UncontrolledForm />
    </>
  );
};

export default UncontrolledFormPage;
