import { FC } from 'react';

import {
  selectUncontrolledForm,
  selectReactHookForm,
  selectData,
} from '../../../store/reducers/selector';

import { useAppSelector } from '../../../hooks/hooks';

import { ROUTES } from '../../../utils/constants/constants';

import DataTile from '../../DataTile';

import styles from './MainPage.module.css';

const MainPage: FC = () => {
  const { successfulSubmitRHForm, successfulSubmitUncontrolledForm } =
    useAppSelector(selectData);
  return (
    <>
      <h1>MainPage</h1>
      <section className={styles.tilesContainer}>
        <DataTile
          selectedForm={selectUncontrolledForm}
          title="Uncontrolled form tile"
          route={ROUTES.UNCONTROLLED_FORM_PAGE}
          isSubmit={successfulSubmitUncontrolledForm}
        />
        <DataTile
          selectedForm={selectReactHookForm}
          title="React hook form tile"
          route={ROUTES.REACT_HOOK_FORM_PAGE}
          isSubmit={successfulSubmitRHForm}
        />
      </section>
    </>
  );
};

export default MainPage;
