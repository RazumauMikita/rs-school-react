import { FC, useEffect, useState } from "react";
import { SearchBarProps } from "./SearchBar.type";
import { Person } from "../../apiService/StarWarsService.type";
import StarWarsService from "../../apiService/StarWarsService";

const SearchBar: FC<SearchBarProps> = (props) => {
  const service = new StarWarsService();
  const { changeState, changeLogStatus } = { ...props };
  const [inputValue, setInputValue] = useState(
    localStorage.getItem("search-query") || "",
  );

  const inputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const buttonClick = () => {
    localStorage.setItem("search-query", inputValue);
    getData();
  };

  const getData = async () => {
    changeLogStatus();
    const data: Person[] = await service.fetchData(inputValue);
    changeState(data);
    changeLogStatus();
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <input type="text" value={inputValue} onChange={inputChange} />
        <button onClick={buttonClick}>Search</button>
      </div>
    </>
  );
};

export default SearchBar;
