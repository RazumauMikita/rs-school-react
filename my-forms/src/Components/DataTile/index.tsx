import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { useAppSelector } from '../../hooks/hooks';

import { DataTileProps } from './DataTile.type';

import styles from './DataTile.module.css';

const DataTile: FC<DataTileProps> = ({
  selectedForm,
  title,
  route,
  isSubmit,
}) => {
  const {
    name,
    age,
    email,
    country,
    image,
    gender,
    password,
    confirmPassword,
    accept,
  } = useAppSelector(selectedForm);

  return (
    <fieldset
      className={clsx(styles.mainContainer, { [styles.active]: isSubmit })}
    >
      <legend>{title}</legend>
      <Link to={route}>
        <button>To form</button>
      </Link>
      <div className={styles.dataContainer}>
        <p>
          Name: <strong>{name}</strong>
        </p>
        <p>
          Age: <strong>{age}</strong>
        </p>
        <p>
          Email: <strong>{email}</strong>
        </p>
        <p>
          Country: <strong>{country}</strong>
        </p>
        <p>
          Gender: <strong>{gender}</strong>
        </p>
        <p>
          Password: <strong>{password}</strong>
        </p>
        <p>
          Confirm password: <strong>{confirmPassword}</strong>
        </p>
        <p>
          Accept: <strong>{accept.toString()}</strong>
        </p>

        <img src={image} alt="image" className={styles.image} />
      </div>
    </fieldset>
  );
};

export default DataTile;
