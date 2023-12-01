import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../utils/constants/constants';
import ReactHookForm from '../../Forms/ReactHookForm/ReactHookForm';

const ReactHookFormPage: FC = () => {
  return (
    <>
      <h1>Form Page</h1>
      <Link to={ROUTES.MAIN_PAGE}>To Main Page</Link>
      <ReactHookForm />
    </>
  );
};

export default ReactHookFormPage;
