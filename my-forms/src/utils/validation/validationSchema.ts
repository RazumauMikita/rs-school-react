import * as yup from 'yup';

import { MAX_FILE_SIZE } from '../constants/constants';
import { isValidFileExtension } from '../handlers/handlers';

export type FormData = yup.InferType<typeof schema>;

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required!')
    .matches(/^[A-Z].*/, 'First letter must be uppercase!'),
  age: yup
    .string()
    .required('Age is required!')
    .test('isNegative', 'Age must contain a positive value!', (value) => {
      if (Number(value) > 0) return true;
    }),
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
      (value, context) => context.parent.password === value
    ),
  accept: yup
    .boolean()
    .test('isTrue', 'Not confirmed', (value) => value === true),
  image: yup
    .mixed()
    .required()
    .test(
      'isValidExtension',
      'Not valid image extension! Only .png and .jpeg!',
      (value) => {
        if (value instanceof FileList && value[0] !== undefined) {
          return isValidFileExtension(value[0].type);
        }
      }
    )
    .test('isValidSize', 'Max allowed size is 100KB!', (value) => {
      if (value instanceof FileList && value[0] !== undefined) {
        return value[0].size <= MAX_FILE_SIZE;
      }
    }),
  country: yup.string().required(),
  gender: yup.string().required(),
});
