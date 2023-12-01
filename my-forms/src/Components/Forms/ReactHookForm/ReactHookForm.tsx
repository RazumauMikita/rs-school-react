import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { reactHookFormSlice } from '../../../store/reducers/reactHookFormSlice';
import { schema } from '../../../utils/validation/validationSchema';
import { genderList } from '../../../utils/data/genderList';
import { ROUTES } from '../../../utils/constants/constants';
import { FormData } from '../../../utils/validation/validationSchema';
import styles from './ReactHookForm.module.css';
import { selectData } from '../../../store/reducers/selector';
import { dataSlice } from '../../../store/reducers/dataSlice';

//import MyRHFInput from '../../MyInputs/MyRHFInput/MyRHFInput';

const ReactHookForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setImage, setData } = reactHookFormSlice.actions;
  const { setSuccessSubmitRHForm } = dataSlice.actions;
  const { countryList } = useAppSelector(selectData);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: yupResolver(schema), mode: 'all' });

  const onSubmit = handleSubmit((data: FormData) => {
    dispatch(setData(data));

    const imageFiles = data.image as FileList;
    const reader = new FileReader();

    reader.readAsDataURL(imageFiles[0]);
    reader.onloadend = () => dispatch(setImage(reader.result as string));
    dispatch(setSuccessSubmitRHForm(true));
    setTimeout(() => {
      dispatch(setSuccessSubmitRHForm(false));
    }, 3000);
    navigate(ROUTES.MAIN_PAGE);
  });

  return (
    <>
      <form onSubmit={onSubmit} className={styles.formContainer}>
        <label htmlFor="name" className={styles.inputLabel}>
          <div className={styles.fieldContainer}>
            <span className={styles.fieldTitle}>Name:</span>
            <input type="text" {...register('name')} id="name" />
          </div>
          <span className={styles.errorMessage}>{errors['name']?.message}</span>
        </label>

        <label htmlFor="age">
          <div className={styles.fieldContainer}>
            <span className={styles.fieldTitle}>Age:</span>
            <input type="number" {...register('age')} id="age" />
          </div>
          <span className={styles.errorMessage}>{errors['age']?.message}</span>
        </label>

        <label htmlFor="email">
          <div className={styles.fieldContainer}>
            <span className={styles.fieldTitle}>Email:</span>
            <input type="email" {...register('email')} id="email" />
          </div>
          <span className={styles.errorMessage}>
            {errors['email']?.message}
          </span>
        </label>

        <label htmlFor="password">
          <div className={styles.fieldContainer}>
            <span className={styles.fieldTitle}>Password:</span>
            <input type="password" {...register('password')} id="password" />
          </div>
          <span className={styles.errorMessage}>
            {errors['password']?.message}
          </span>
        </label>

        <label htmlFor="confirmPassword">
          <div className={styles.fieldContainer}>
            <span className={styles.fieldTitle}>Confirm password:</span>
            <input
              type="password"
              {...register('confirmPassword')}
              id="confirmPassword"
            />
          </div>
          <span className={styles.errorMessage}>
            {errors['confirmPassword']?.message}
          </span>
        </label>

        <label htmlFor="image">
          <div className={styles.fieldContainer}>
            <span className={styles.fieldTitle}>Image:</span>
            <input type="file" {...register('image')} id="image" />
          </div>
          <span className={styles.errorMessage}>
            {errors['image']?.message}
          </span>
        </label>

        <label htmlFor="gender">
          <div className={styles.fieldContainer}>
            <span className={styles.fieldTitle}>Gender:</span>
            <select {...register('gender')} id="gender">
              {genderList.map((gender, index) => {
                return <option key={index}>{gender}</option>;
              })}
            </select>
          </div>
          <span className={styles.errorMessage}>
            {errors['gender']?.message}
          </span>
        </label>

        <label htmlFor="country">
          <div className={styles.fieldContainer}>
            <span className={styles.fieldTitle}>Country:</span>
            <select {...register('country')} id="country">
              {countryList.map((country, index) => {
                return <option key={index}>{country}</option>;
              })}
            </select>
          </div>
          <span className={styles.errorMessage}>
            {errors['gender']?.message}
          </span>
        </label>

        <label htmlFor="accept">
          <div className={styles.fieldContainer}>
            <span className={styles.fieldTitle}>Accept:</span>
            <input type="checkbox" {...register('accept')} id="accept" />
          </div>
          <span className={styles.errorMessage}>
            {errors['accept']?.message}
          </span>
        </label>

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </>
  );
};

export default ReactHookForm;
