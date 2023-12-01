import { FC } from 'react';

import { MyInputProps } from './MyInput.type';

const MyInput: FC<MyInputProps> = ({ type, id, title, refObject }) => {
  return (
    <div>
      <label htmlFor={id}>
        {title}
        <input type={type} ref={refObject} id={id} />
      </label>
    </div>
  );
};

export default MyInput;
