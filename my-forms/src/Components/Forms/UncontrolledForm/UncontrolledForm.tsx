import { FC, SyntheticEvent, useRef, useState } from 'react';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import styles from './UncontrolledForm.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { uncontrolledFormSlice } from '../../../store/reducers/uncontrolledFormSlice';
import { genderList } from '../../../utils/data/genderList';
import { schema } from '../../../utils/validation/validationSchema';
import { ROUTES } from '../../../utils/constants/constants';
import { FormData } from '../../../utils/validation/validationSchema';
import { selectData } from '../../../store/reducers/selector';
import { dataSlice } from '../../../store/reducers/dataSlice';

import MyInput from '../../MyInputs/MyInput';
import MySelect from '../../MySelect/MySelect';

const UncontrolledForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const genderInputRef = useRef<HTMLSelectElement>(null);
  const countryInputRef = useRef<HTMLSelectElement>(null);
  const acceptInputRef = useRef<HTMLInputElement>(null);

  const { setData, setImage } = uncontrolledFormSlice.actions;
  const { countryList } = useAppSelector(selectData);
  const { setSuccessSubmitUnCtForm } = dataSlice.actions;

  const errorsInitialState = {
    name: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
    accept: '',
    image: '',
  };
  const [errorsStore, setErrors] = useState(errorsInitialState);

  const setErrorToField = (errors: yup.ValidationError) => {
    errors.inner.forEach((e) => {
      const path = e.path || '';
      setErrors((prevErrors) => ({
        ...prevErrors,
        [path]: e.message,
      }));
    });
  };
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const nameString = nameInputRef.current?.value || '';
    const ageNumber = ageInputRef.current?.value || '';
    const emailString = emailInputRef.current?.value || '';
    const passwordString = passwordInputRef.current?.value || '';
    const confirmPasswordString = confirmPasswordInputRef.current?.value || '';
    const acceptInput = acceptInputRef.current?.checked || false;
    const imageInput = imageInputRef.current?.files || '';
    const genderInput = genderInputRef.current?.value || '';
    const countryInput = countryInputRef.current?.value || '';

    const formData: FormData = {
      name: nameString,
      age: ageNumber,
      email: emailString,
      password: passwordString,
      confirmPassword: confirmPasswordString,
      accept: acceptInput,
      image: imageInput,
      gender: genderInput,
      country: countryInput,
    };
    try {
      await schema.validate(formData, { abortEarly: false });

      if (imageInputRef.current?.files) {
        const reader = new FileReader();
        const imageFiles = imageInputRef.current?.files[0];
        reader.readAsDataURL(imageFiles);
        reader.onloadend = () => dispatch(setImage(reader.result as string));
      }
      dispatch(setData(formData));
      dispatch(setSuccessSubmitUnCtForm(true));
      setTimeout(() => {
        dispatch(setSuccessSubmitUnCtForm(false));
      }, 3000);
      navigate(ROUTES.MAIN_PAGE);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setErrors(errorsInitialState);
        setErrorToField(err);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.formContainer} noValidate>
        <MyInput
          type={'text'}
          id={'inputName'}
          title={'Name:'}
          refObject={nameInputRef}
          error={errorsStore.name}
        />

        <MyInput
          type={'number'}
          id={'inputAge'}
          title={'Age:'}
          refObject={ageInputRef}
          error={errorsStore.age}
        />

        <MyInput
          type={'email'}
          id={'inputEmail'}
          title={'Email:'}
          refObject={emailInputRef}
          error={errorsStore.email}
        />

        <MyInput
          type={'password'}
          id={'inputPassword'}
          title={'Password:'}
          refObject={passwordInputRef}
          error={errorsStore.password}
        />

        <MyInput
          type={'password'}
          id={'inputConfirmPassword'}
          title={'Confirm password:'}
          refObject={confirmPasswordInputRef}
          error={errorsStore.confirmPassword}
        />
        <MyInput
          type={'file'}
          id={'inputImage'}
          title={'Image:'}
          refObject={imageInputRef}
          error={errorsStore.image}
        />

        <MySelect
          id={'inputGender'}
          title={'Gender:'}
          refObject={genderInputRef}
          options={genderList}
        />

        <MySelect
          id={'inputCountry'}
          title={'Country:'}
          refObject={countryInputRef}
          options={countryList}
        />

        <MyInput
          type={'checkbox'}
          id={'inputAccept'}
          title={'Accept:'}
          refObject={acceptInputRef}
          error={errorsStore.accept}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
