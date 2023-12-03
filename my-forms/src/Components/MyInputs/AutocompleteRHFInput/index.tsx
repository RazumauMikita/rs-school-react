import { ChangeEvent, FC, useState } from 'react';
import { FieldErrors } from 'react-hook-form';

import { selectData } from '../../../store/reducers/selector';

import { useAppSelector } from '../../../hooks/hooks';

import { StyledRHFInputProps } from '../StyledRHFInput/StyledRHFInput.type';

import styles from './AutocompleteRHFInput.module.css';

const AutocompleteRHFInput: FC<StyledRHFInputProps> = ({
  name,
  errors,
  register,
  title,
  type,
}) => {
  const keyOfError = name as string as keyof FieldErrors<FormData>;
  const { countryList } = useAppSelector(selectData);
  const [inputValue, setInputValue] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [filtered, setFiltered] = useState(countryList);

  const onClickHandler = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setInputValue(event.currentTarget.innerText);
    setFiltered([]);
    setIsShow(false);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value;
    if (input) {
      const filteredSuggestions = countryList.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
      );
      setFiltered(filteredSuggestions);
      setIsShow(true);
      setInputValue(input);
    } else {
      setInputValue('');
      setIsShow(false);
    }
  };

  const renderSuggestions = () => {
    if (isShow ?? filtered.length) {
      if (true) {
        return (
          <ul className={styles.suggestionsContainer}>
            {filtered.map((country, index) => {
              return (
                <li
                  className={styles.suggestionItem}
                  onClick={onClickHandler}
                  key={index}
                >
                  {country}
                </li>
              );
            })}
          </ul>
        );
      }
    }
  };

  return (
    <label htmlFor={name} className={styles.inputLabel}>
      <div className={styles.fieldContainer}>
        <span className={styles.fieldTitle}>{title}</span>
        <div>
          <input
            {...register(name)}
            onChange={onChangeHandler}
            type={type}
            id={name}
            value={inputValue}
          />
          {renderSuggestions()}
        </div>
      </div>

      <span className={styles.errorMessage}>{errors[keyOfError]?.message}</span>
    </label>
  );
};

export default AutocompleteRHFInput;
