import { FC, SyntheticEvent, useRef } from 'react';
import * as yup from 'yup';

import styles from './UncontrolledForm.module.css';
import { useAppDispatch } from '../../../hooks/hooks';
import { uncontrolledFormSlice } from '../../../store/reducers/uncontrolledFormSlice';
import { genderList } from '../../../utils/data/genderList';
import { countryList } from '../../../utils/data/countryList';
import { schema } from '../../../utils/validation/validationSchema';

import MyInput from '../../MyInputs/MyInput';
import MySelect from '../../MySelect/MySelect';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants/constants';
import { FormData } from '../../../utils/validation/validationSchema';

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

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const nameString = nameInputRef.current?.value || '';
    const ageNumber = ageInputRef.current?.value || '';
    const emailString = emailInputRef.current?.value || '';
    const passwordString = passwordInputRef.current?.value || '';
    const confirmPasswordString = confirmPasswordInputRef.current?.value || '';
    const acceptInput = acceptInputRef.current?.checked || false;
    const imageInput = imageInputRef.current?.files;
    const genderInput = genderInputRef.current?.value || '';
    const countryInput = countryInputRef.current?.value || '';

    const formData: FormData = {
      name: nameString,
      age: ageNumber,
      email: emailString,
      password: passwordString,
      confirmPassword: confirmPasswordString,
      accept: acceptInput,
      image: '',
      gender: genderInput,
      country: countryInput,
    };
    try {
      await schema.validate(
        { ...formData, image: imageInput },
        { abortEarly: false }
      );

      if (imageInputRef.current?.files) {
        const reader = new FileReader();
        const imageFiles = imageInputRef.current?.files[0];
        reader.readAsDataURL(imageFiles);
        reader.onloadend = () => dispatch(setImage(reader.result as string));
      }
      dispatch(setData(formData));
      navigate(ROUTES.MAIN_PAGE);
    } catch (err) {
      if (err instanceof yup.ValidationError) console.log(err.inner);
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
        />

        <MyInput
          type={'number'}
          id={'inputAge'}
          title={'Age:'}
          refObject={ageInputRef}
        />

        <MyInput
          type={'email'}
          id={'inputEmail'}
          title={'Email:'}
          refObject={emailInputRef}
        />

        <MyInput
          type={'password'}
          id={'inputPassword'}
          title={'Password:'}
          refObject={passwordInputRef}
        />

        <MyInput
          type={'password'}
          id={'inputConfirmPassword'}
          title={'Confirm password:'}
          refObject={confirmPasswordInputRef}
        />
        <MyInput
          type={'file'}
          id={'inputImage'}
          title={'Image:'}
          refObject={imageInputRef}
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
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
