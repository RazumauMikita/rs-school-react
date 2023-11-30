import { FC } from 'react';

import { ROUTES } from '../../../utils/constants/routes';
import {
  selectUncontrolledForm,
  selectReactHookForm,
} from '../../../store/reducers/selector';
import DataTile from '../../DataTile/DataTile';
import styles from './MainPage.module.css';

const MainPage: FC = () => {
  return (
    <>
      <h1>MainPage</h1>
      <section className={styles.tilesContainer}>
        <DataTile
          selectedForm={selectUncontrolledForm}
          title="Uncontrolled form tile"
          route={ROUTES.UNCONTROLLED_FORM_PAGE}
        />
        <DataTile
          selectedForm={selectReactHookForm}
          title="React hook form tile"
          route={ROUTES.REACT_HOOK_FORM_PAGE}
        />
      </section>
    </>
  );
};

export default MainPage;
