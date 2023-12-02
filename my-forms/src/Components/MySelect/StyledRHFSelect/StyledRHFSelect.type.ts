import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface StyledRHFSelectProps {
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
  title: string;
  errors: FieldErrors<FormData>;
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
  options: string[];
}
