import { FC, useState } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { Person } from "../../apiService/StarWarsService.type";
import DataViewer from "../../Components/DataViewer/DataViewer";
import Pagination from "../../Components/Pagination/Pagination";
import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const ROWS_PER_PAGE = 10;
const getTotalPageCount = (rowCount: number): number =>
  Math.ceil(rowCount / ROWS_PER_PAGE);

const MainPage: FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [items, setItems] = useState<number>(0);
  const [isLoading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });

  const pageT = Number(searchParams.get("page"));
  const changeLoadStatus = (status: boolean) => {
    setLoading(status);
  };

  const setData = (newData: Person[]) => {
    setPeople(newData);
  };

  const prevPageClick = () => {
    setSearchParams({ page: String(pageT - 1) });
  };
  const nextPageClick = () => {
    setSearchParams({ page: String(pageT + 1) });
  };

  return (
    <>
      <SearchBar
        changeState={setData}
        changeLogStatus={changeLoadStatus}
        page={pageT.toString()}
        setItems={setItems}
      />
      <DataViewer data={people} loadStatus={isLoading} />
      {!isLoading ? (
        <Pagination
          onNextPageClick={nextPageClick}
          onPrevPageClick={prevPageClick}
          disable={{
            left: pageT === 1,
            right: pageT === getTotalPageCount(items),
          }}
          nav={{
            current: pageT,
            total: getTotalPageCount(items),
          }}
        />
      ) : (
        ""
      )}

      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
};

export default MainPage;
