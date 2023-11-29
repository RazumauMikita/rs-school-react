import { FC, SyntheticEvent, useRef } from 'react';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { uncontrolledFormSlice } from '../../../store/reducers/uncontrolledFormSlice';
import styles from './UncontrolledForm.module.css';
import MyInput from '../../MyInput/MyInput';
import { selectUncontrolledForm } from '../../../store/reducers/selector';
import MySelect from '../../MySelect/MySelect';
import { genderList } from '../../../utils/genderList';
import { countryList } from '../../../utils/countryList';
import { FormState } from '../../../store/reducers/slice.type';

const MAX_FILE_SIZE = 102400;

const validFileExtensions = ['png', 'jpg'];

const isValidFileExtension = (fileName: string) => {
  const extension: string = fileName.split('.')[1];
  return validFileExtensions.includes(extension);
};

const UncontrolledForm: FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const genderInputRef = useRef<HTMLSelectElement>(null);
  const countryInputRef = useRef<HTMLSelectElement>(null);
  const acceptInputRef = useRef<HTMLInputElement>(null);

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required!')
      .matches(/^[A-Z].*/, 'First letter must be uppercase!'),
    age: yup
      .number()
      .required('Age is required!')
      .min(1, 'No negative values!'),
    email: yup
      .string()
      .required('Email is required!')
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Not valid Email!'),
    password: yup
      .string()
      .required('Password is required!')
      .matches(/\d/, 'Password must contain at least 1 digit!')
      .matches(/[A-Z]/, 'Password must contain at least 1 uppercase letter!')
      .matches(/[a-z]/, 'Password must contain at least 1 lowercase letter!')
      .matches(
        /[-=+!@"№;:?#$%_()><,.|{}'`~/\\^&[*\]]/,
        'Password must contain at least 1 special character!'
      )
      .min(8),
    confirmPassword: yup
      .string()
      .required('Confirm password is required!')
      .test(
        'is confirm password match',
        'Confirm password should match with password!',
        (value) => value === passwordInputRef.current?.value
      ),
    accept: yup
      .boolean()
      .test('isTrue', 'Not confirmed', (value) => value === true),
    image: yup
      .mixed()
      .test(
        'isValidExtension',
        'Not valid image extension! Only .png and .jpeg!',
        (value) => {
          if (value instanceof HTMLInputElement)
            return isValidFileExtension(value.value);
        }
      )
      .test('isValidSize', 'Max allowed size is 100KB!', (value) => {
        if (value instanceof HTMLInputElement && value.files) {
          return value.files[0].size <= MAX_FILE_SIZE;
        }
      }),
  });

  const dispatch = useAppDispatch();
  const { setData, setImage } = uncontrolledFormSlice.actions;
  const {} = useAppSelector(selectUncontrolledForm);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const nameString = nameInputRef.current?.value || '';
    const ageNumber = ageInputRef.current?.value || '';
    const emailString = emailInputRef.current?.value || '';
    const passwordString = passwordInputRef.current?.value || '';
    const confirmPasswordString = confirmPasswordInputRef.current?.value || '';
    const acceptInput = acceptInputRef.current?.checked || false;
    const imageInput = imageInputRef.current;
    const genderInput = genderInputRef.current?.value || '';
    const countryInput = countryInputRef.current?.value || '';

    const formData: FormState = {
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
      await schema.validate({ ...formData, image: imageInput });
      if (imageInputRef.current?.files) {
        const reader = new FileReader();

        const imageFile = imageInputRef.current?.files[0];

        reader.readAsDataURL(imageFile);
        reader.onloadend = function () {
          dispatch(setImage(reader.result as string));
        };
      }
      dispatch(setData(formData));
    } catch (err) {
      if (err instanceof yup.ValidationError) console.log(err.message);
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
