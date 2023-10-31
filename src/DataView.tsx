import { Component } from "react";
import { DataViewProps } from "./apiTypes";

export default class DataView extends Component<DataViewProps> {
  constructor(props: DataViewProps) {
    super(props);
  }
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
          : "load..."}
      </div>
    );
  }
}
