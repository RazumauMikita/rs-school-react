import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface StyledRHFInputProps {
  name:
    | 'name'
    | 'age'
    | 'email'
    | 'password'
    | 'confirmPassword'
    | 'accept'
    | 'gender'
    | 'country'
    | 'image';
  type: string;
  title: string;
  register: UseFormRegister<{
    accept?: boolean | undefined;
    name: string;
    age: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    country: string;
    image: object;
  }>;
  errors: FieldErrors<FormData>;
}
