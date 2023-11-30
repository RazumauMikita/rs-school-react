import { FC } from 'react';

import { MySelectProps } from './MySelect.type';

const MtSelect: FC<MySelectProps> = ({ id, title, refObject, options }) => {
  return (
    <>
      <label htmlFor={id}>
        {title}
        <select ref={refObject} id={id} autoComplete="on">
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
};

export default MtSelect;
