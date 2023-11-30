import * as yup from 'yup';

const MAX_FILE_SIZE = 102400;

const VALID_FILE_EXTENSIONS = ['png', 'jpg'];

const isValidFileExtension = (fileName: string) => {
  const extension: string = fileName.split('.').reverse()[0];
  return VALID_FILE_EXTENSIONS.includes(extension);
};

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required!')
    .matches(/^[A-Z].*/, 'First letter must be uppercase!'),
  age: yup.number().required('Age is required!').min(1, 'No negative values!'),
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
        if (value.files[0] !== undefined) {
          return value.files[0].size <= MAX_FILE_SIZE;
        }
      }
    }),
});
