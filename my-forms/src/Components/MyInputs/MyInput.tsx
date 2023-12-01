import { FC } from 'react';

import { MyInputProps } from './MyInput.type';
import styles from './MyInput.module.css';

const MyInput: FC<MyInputProps> = ({ type, id, title, refObject, error }) => {
  return (
    <label htmlFor={id} className={styles.inputLabel}>
      <div className={styles.fieldContainer}>
        <span className={styles.fieldTitle}>{title}</span>
        <input type={type} ref={refObject} id={id} />
      </div>
      <span className={styles.errorMessage}>{error}</span>
    </label>
  );
};

export default MyInput;
