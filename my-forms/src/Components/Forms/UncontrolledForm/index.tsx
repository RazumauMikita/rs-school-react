import { FC, SyntheticEvent, useRef, useState } from 'react';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { dataSlice } from '../../../store/reducers/dataSlice';
import { uncontrolledFormSlice } from '../../../store/reducers/uncontrolledFormSlice';

import { useAppDispatch } from '../../../hooks/hooks';

import { genderList } from '../../../utils/data/genderList';
import { schema } from '../../../utils/validation/validationSchema';
import { ROUTES } from '../../../utils/constants/constants';
import { FormData } from '../../../utils/validation/validationSchema';

import StyledInput from '../../MyInputs/StyledInput';
import StyledSelect from '../../MySelect/StyledSelect';

import styles from './UncontrolledForm.module.css';
import AutocompleteInput from '../../MyInputs/AutocompleteInput';

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
  const countryInputRef = useRef<HTMLInputElement>(null);
  const acceptInputRef = useRef<HTMLInputElement>(null);

  const { setData, setImage } = uncontrolledFormSlice.actions;
  const { setSuccessSubmitUnCtForm } = dataSlice.actions;

  const errorsInitialState = {
    name: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
    accept: '',
    image: '',
    country: '',
  };
  const [errorsStore, setErrors] = useState(errorsInitialState);

  const setErrorToField = (errors: yup.ValidationError) => {
    errors.inner.forEach((err) => {
      const path = err.path;
      if (path) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [path]: err.message,
        }));
      }
    });
  };
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const formData: FormData = {
      name: nameInputRef.current?.value || '',
      age: ageInputRef.current?.value || '',
      email: emailInputRef.current?.value || '',
      password: passwordInputRef.current?.value || '',
      confirmPassword: confirmPasswordInputRef.current?.value || '',
      accept: acceptInputRef.current?.checked || false,
      image: imageInputRef.current?.files || '',
      gender: genderInputRef.current?.value || '',
      country: countryInputRef.current?.value || '',
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
        <StyledInput
          type="text"
          id="inputName"
          title="Name:"
          refObject={nameInputRef}
          error={errorsStore.name}
        />

        <StyledInput
          type="number"
          id="inputAge"
          title="Age:"
          refObject={ageInputRef}
          error={errorsStore.age}
        />

        <StyledInput
          type="email"
          id="inputEmail"
          title="Email:"
          refObject={emailInputRef}
          error={errorsStore.email}
        />

        <StyledInput
          type="password"
          id="inputPassword"
          title="Password:"
          refObject={passwordInputRef}
          error={errorsStore.password}
        />

        <StyledInput
          type="password"
          id="inputConfirmPassword"
          title="Confirm password:"
          refObject={confirmPasswordInputRef}
          error={errorsStore.confirmPassword}
        />
        <StyledInput
          type="file"
          id="inputImage"
          title="Image:"
          refObject={imageInputRef}
          error={errorsStore.image}
        />

        <StyledSelect
          id="inputGender"
          title="Gender:"
          refObject={genderInputRef}
          options={genderList}
        />

        <AutocompleteInput
          id="inputCountry"
          title="Country:"
          refObject={countryInputRef}
          type="text"
          error={errorsStore.country}
        />

        <StyledInput
          type="checkbox"
          id="inputAccept"
          title="Accept:"
          refObject={acceptInputRef}
          error={errorsStore.accept}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
