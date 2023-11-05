import { FC, useEffect, useState } from "react";
import { SearchBarProps } from "./SearchBar.type";
import { ApiResponse } from "../../apiService/StarWarsService.type";
import StarWarsService from "../../apiService/StarWarsService";

const SearchBar: FC<SearchBarProps> = (props) => {
  const service = new StarWarsService();
  const { changeState, changeLogStatus, setItems, page } = { ...props };
  const [inputValue, setInputValue] = useState(
    localStorage.getItem("search-query") || ""
  );

  const inputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const buttonClick = () => {
    localStorage.setItem("search-query", inputValue);
    getData();
  };

  const getData = async () => {
    changeLogStatus(true);
    const data: ApiResponse = await service.fetchData(inputValue, page);
    setItems(data.count);
    changeState(data.results);
    changeLogStatus(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
