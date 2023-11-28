import { FC } from 'react';
import { Link } from 'react-router-dom';

const UncontrolledFormPage: FC = () => {
  return (
    <>
      <h1>Uncontrolled Form Page</h1>
      <Link to={'/'}>To Main Page</Link>
    </>
  );
};

export default UncontrolledFormPage;
