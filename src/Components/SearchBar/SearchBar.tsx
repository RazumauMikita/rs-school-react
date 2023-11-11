import { FC, useContext, useEffect } from "react";
import { SearchBarProps } from "./SearchBar.type";
import { ApiResponse } from "../../apiService/StarWarsService.type";
import StarWarsService from "../../apiService/StarWarsService";
import {
  InputValueContext,
  PeopleContext,
} from "../../contexts/AppContextProvider";

const SearchBar: FC<SearchBarProps> = (props) => {
  const service = new StarWarsService();
  const { changeLogStatus, setItems, setURLParams, page } = {
    ...props,
  };
  const inputProps = useContext(InputValueContext);
  const peopleProps = useContext(PeopleContext);

  const inputChange = (event: React.FormEvent<HTMLInputElement>) => {
    inputProps?.setInputValue(event.currentTarget.value);
  };

  const buttonClick = () => {
    localStorage.setItem("search-query", inputProps?.inputValue || "");
    if (page !== "1") {
      setURLParams({ page: "1" });
      return;
    }
    getData();
  };

  const getData = async () => {
    changeLogStatus(true);
    const data: ApiResponse = await service.fetchData(
      inputProps?.inputValue || "",
      page,
    );
    setItems(data.count);
    peopleProps?.setPeople(data.results);
    changeLogStatus(false);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <div>
        <input
          type="text"
          value={inputProps?.inputValue}
          onChange={inputChange}
        />
        <button onClick={buttonClick}>Search</button>
      </div>
    </>
  );
};

export default SearchBar;
