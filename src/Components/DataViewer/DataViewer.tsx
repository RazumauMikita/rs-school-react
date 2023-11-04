import { FC } from "react";
import { DataViewerProps } from "./DataViewer.type";
import styles from "./DataViewer.module.css";

const DataViewerF: FC<DataViewerProps> = (props) => {
  const { data, loadStatus } = { ...props };
  return (
    <div className={styles.data_container}>
      {loadStatus ? (
        data.map((el, index) => {
          return (
            <div className={styles.item} key={index}>
              <span>
                <strong>Name:</strong> {el.name}
              </span>
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
