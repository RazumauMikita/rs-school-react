import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants/routes';
import { selectUncontrolledForm } from '../../../store/reducers/selector';
import { useAppSelector } from '../../../hooks/hooks';

const MainPage: FC = () => {
  const { name, age, email, country, image, gender } = useAppSelector(
    selectUncontrolledForm
  );

  return (
    <>
      <h1>MainPage</h1>
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
      <p>{country}</p>
      <p>{gender}</p>

      <img src={image} width={200} />
      <Link to={ROUTES.REACT_HOOK_FORM_PAGE}>To React Hook Form Page</Link>
      <Link to={ROUTES.UNCONTROLLED_FORM_PAGE}>To Uncontrolled Form Page</Link>
    </>
  );
};

export default MainPage;
