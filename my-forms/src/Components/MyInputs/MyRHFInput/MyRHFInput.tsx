import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
interface MyRHFInputProps {
  name: string;
  type: string;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const MyRHFInput: FC<MyRHFInputProps> = ({ name, type, register }) => {
  return (
    <label htmlFor={name}>
      <input type={type} {...register} id={name} />
      <br />
      <span>{}</span>
    </label>
  );
};

export default MyRHFInput;
