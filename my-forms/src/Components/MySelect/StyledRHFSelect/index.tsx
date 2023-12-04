import { FC } from 'react';
import { FieldErrors } from 'react-hook-form';

import { StyledRHFSelectProps } from './StyledRHFSelect.type';

import styles from './StyledRHFSelect.module.css';

const StyledRHFSelect: FC<StyledRHFSelectProps> = ({
  name,
  title,
  errors,
  register,
  options,
}) => {
  const keyOfError = name as string as keyof FieldErrors<FormData>;
  return (
    <label htmlFor={name}>
      <div className={styles.fieldContainer}>
        <span className={styles.fieldTitle}>{title}:</span>
        <select {...register(name)} id={name}>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
      </div>
      <span className={styles.errorMessage}>{errors[keyOfError]?.message}</span>
    </label>
  );
};

export default StyledRHFSelect;
