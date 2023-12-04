import { FC } from 'react';

import { StyledSelectProps } from './MySelect.type';

import styles from './MySelect.module.css';

const StyledSelect: FC<StyledSelectProps> = ({
  id,
  title,
  refObject,
  options,
}) => {
  return (
    <label className={styles.inputLabel} htmlFor={id}>
      <div className={styles.fieldContainer}>
        <span className={styles.fieldTitle}>{title}</span>

        <select ref={refObject} id={id} autoComplete="on">
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <span className={styles.errorMessage}></span>
    </label>
  );
};

export default StyledSelect;
