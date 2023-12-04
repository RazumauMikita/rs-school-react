import { FC } from 'react';
import { FieldErrors } from 'react-hook-form';

import styles from './StyledRHFInput.module.css';
import { StyledRHFInputProps } from './StyledRHFInput.type';

const StyledRHFInput: FC<StyledRHFInputProps> = ({
  name,
  type,
  register,
  errors,
  title,
}) => {
  const keyOfError = name as string as keyof FieldErrors<FormData>;

  return (
    <label htmlFor={name} className={styles.inputLabel}>
      <div className={styles.fieldContainer}>
        <span className={styles.fieldTitle}>{title}:</span>
        <input type={type} {...register(name)} id={name} />
      </div>
      <span className={styles.errorMessage}>{errors[keyOfError]?.message}</span>
    </label>
  );
};

export default StyledRHFInput;
