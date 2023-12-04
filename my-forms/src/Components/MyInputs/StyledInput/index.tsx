import { FC } from 'react';

import { StyledInputProps } from './StyledInput.type';

import styles from './StyledInput.module.css';

const StyledInput: FC<StyledInputProps> = ({
  type,
  id,
  title,
  refObject,
  error,
}) => {
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

export default StyledInput;
