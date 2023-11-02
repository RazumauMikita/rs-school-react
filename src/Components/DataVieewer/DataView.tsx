import { Component } from "react";
import { DataViewerProps, DataViewerState } from "./DataViewer.type";

export default class DataViewer extends Component<
  DataViewerProps,
  DataViewerState
> {
  render() {
    return (
      <div className="data-container">
        {this.props.loadStatus
          ? this.props.data.map((el, index) => {
              return (
                <div className="item__container" key={index}>
                  <span>Name: {el.name}</span>
                  <span>Birth year: {el.birth_year}</span>
                </div>
              );
            })
          : "loading..."}
      </div>
    );
  }
}
