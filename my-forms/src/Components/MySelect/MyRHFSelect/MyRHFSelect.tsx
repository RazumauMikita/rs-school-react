import { FC } from 'react';
import { FieldErrors } from 'react-hook-form';

import styles from './MyRHFSelect.module.css';
import { MyRHFSelectProps } from './MyRHFSelect.type';

const MyRHFSelect: FC<MyRHFSelectProps> = ({
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

export default MyRHFSelect;
