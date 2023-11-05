import { FC } from "react";
import { DataViewerProps } from "./DataViewer.type";
import styles from "./DataViewer.module.css";
import { Link } from "react-router-dom";

const DataViewerF: FC<DataViewerProps> = (props) => {
  const { data, loadStatus, page, setToggleSide } = { ...props };
  const openSide = () => {
    setToggleSide(true);
  };
  return (
    <div className={styles.data_container}>
      {!loadStatus ? (
        data.map((el, index) => {
          const id = el.url.split("/").at(-2);
          return (
            <div className={styles.item} key={index}>
              <Link to={{ pathname: `/person/${id}`, search: `page=${page}` }}>
                <span onClick={openSide}>
                  <strong>Name:</strong> {el.name}
                </span>
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
        <span className="">loading...</span>
      )}
    </div>
  );
};

export default DataViewerF;
