import { Component } from "react";
import { DataViewerProps } from "./DataViewer.type";
import styles from "./DataViewer.module.css";
export default class DataViewer extends Component<
  DataViewerProps,
  Record<never, string>
> {
  render() {
    return (
      <div className={styles.data_container}>
        {this.props.loadStatus ? (
          this.props.data.map((el, index) => {
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
  }
}
