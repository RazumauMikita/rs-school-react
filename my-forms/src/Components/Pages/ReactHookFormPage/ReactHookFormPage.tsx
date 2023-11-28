import { FC } from 'react';
import { Link } from 'react-router-dom';

const ReactHookFormPage: FC = () => {
  return (
    <>
      <h1>Form Page</h1>
      <Link to={'/'}>To Main Page</Link>
    </>
  );
};

export default ReactHookFormPage;
