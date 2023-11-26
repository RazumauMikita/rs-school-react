import { FC } from 'react';
import TopBar from '../../TopBar/TopBar';
import UserViewer from '../../UserViewer/UserViewer';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import styles from './MainPage.module.css';

const NewMainPAge: FC = () => {
  const { isDetailOpen } = useAppSelector((state) => state.appReducer);
  return (
    <div className={styles.main_page_wrapper}>
      <div className={isDetailOpen ? styles.left_section : styles.right_section_all}>
        <TopBar />
        <UserViewer />
      </div>

      <div className={isDetailOpen ? styles.right_section : styles.right_section_close}>
        <Outlet />
      </div>
    </div>
  );
};

export default NewMainPAge;
