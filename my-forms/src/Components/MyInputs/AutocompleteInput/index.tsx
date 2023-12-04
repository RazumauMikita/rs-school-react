import { ChangeEvent, FC, useState } from 'react';

import { selectData } from '../../../store/reducers/selector';

import { StyledInputProps } from '../StyledInput/StyledInput.type';

import { useAppSelector } from '../../../hooks/hooks';

import styles from './AutocompleteInput.module.css';

const AutocompleteInput: FC<StyledInputProps> = ({
  id,
  type,
  refObject,
  error,
  title,
}) => {
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
    <label htmlFor={id} className={styles.inputLabel}>
      <div className={styles.fieldContainer}>
        <span className={styles.fieldTitle}>{title}</span>
        <div>
          <input
            onChange={onChangeHandler}
            type={type}
            ref={refObject}
            id={id}
            value={inputValue}
          />
          {renderSuggestions()}
        </div>
      </div>

      <span className={styles.errorMessage}>{error}</span>
    </label>
  );
};

export default AutocompleteInput;
