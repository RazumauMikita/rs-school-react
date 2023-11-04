import { FC, useState } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";

import { Person } from "../../apiService/StarWarsService.type";
import DataViewer from "../../Components/DataViewer/DataViewer";
import Pagination from "../../Components/Pagination/Pagination";
const ROWS_PER_PAGE = 10;
const getTotalPageCount = (rowCount: number): number =>
  Math.ceil(rowCount / ROWS_PER_PAGE);

const MainPage: FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [items, setItems] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setLoading] = useState(false);
  const changeLoadStatus = (status: boolean) => {
    setLoading(status);
  };

  const setData = (newData: Person[]) => {
    setPeople(newData);
  };

  const prevPageClick = () => {
    const currentPage = page;
    const prevPage = currentPage - 1;
    setPage(prevPage > 0 ? prevPage : currentPage);
  };
  const nextPageClick = () => {
    const currentPage = page;
    const nextPage = currentPage + 1;
    const totalPages = people ? getTotalPageCount(items) : currentPage;
    setPage(nextPage <= totalPages ? nextPage : currentPage);
  };

  return (
    <>
      <SearchBar
        changeState={setData}
        changeLogStatus={changeLoadStatus}
        page={page.toString()}
        setItems={setItems}
      />
      <DataViewer data={people} loadStatus={isLoading} />
      <Pagination
        onNextPageClick={nextPageClick}
        onPrevPageClick={prevPageClick}
        disable={{
          left: page === 1,
          right: page === getTotalPageCount(items),
        }}
        nav={{
          current: page,
          total: getTotalPageCount(items),
        }}
      />
    </>
  );
};

export default MainPage;
