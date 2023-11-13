import { FC, useContext } from "react";
import { DataViewerProps } from "./DataViewer.type";
import styles from "./DataViewer.module.css";
import { Link } from "react-router-dom";
import { PeopleContext } from "../../contexts/AppContextProvider";

const DataViewerF: FC<DataViewerProps> = (props) => {
  const { loadStatus, page, setToggleSide } = { ...props };
  const peopleProps = useContext(PeopleContext);
  const openSide = () => {
    setToggleSide(true);
  };
  return (
    <div className={styles.data_container}>
      {!loadStatus ? (
        peopleProps?.people.map((el, index) => {
          const id = el.url.split("/").at(-2);
          return (
            <div className={styles.item} key={index}>
              <Link to={{ pathname: `/person/${id}`, search: `page=${page}` }}>
                <span onClick={openSide}>{el.name}</span>
              </Link>

              <span>
                <strong>Birth year:</strong> {el.birth_year}
              </span>
              <span>
                <strong>Eye color:</strong> {el.eye_color}
              </span>
            </div>
          );
        })
      ) : (
        <span className={styles.loader}>loading...</span>
      )}
      {!peopleProps?.people.length && !loadStatus && (
        <h2 title="missing data message">There are not cards</h2>
      )}
    </div>
  );
};

export default DataViewerF;
