import { FC, useState } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ErrorButton from "../../ErrorButton";
import { Person } from "../../apiService/StarWarsService.type";
import DataViewer from "../../Components/DataViewer/DataViewer";

const MainPage: FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setLoading] = useState(false);
  const changeLoadStatus = (status: boolean) => {
    setLoading(status);
  };

  const setData = (newData: Person[]) => {
    setPeople(newData);
  };

  return (
    <>
      <SearchBar changeState={setData} changeLogStatus={changeLoadStatus} />
      <DataViewer data={people} loadStatus={isLoading} />
      <ErrorButton />
    </>
  );
};

export default MainPage;
