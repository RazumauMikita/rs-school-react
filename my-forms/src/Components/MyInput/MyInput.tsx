import { FC } from 'react';
import { MyInputProps } from './MyInput.type';

const MyInput: FC<MyInputProps> = ({ type, id, title, refObject }) => {
  return (
    <>
      <label htmlFor={id}>
        {title}
        <input type={type} ref={refObject} id={id} />
      </label>
    </>
  );
};

export default MyInput;
