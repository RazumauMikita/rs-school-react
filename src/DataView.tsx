import { Component } from "react";
type PeopleResponse = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
};

interface DataViewProps {
  data: PeopleResponse[];
}

export default class DataView extends Component<DataViewProps> {
  constructor(props: DataViewProps) {
    super(props);
  }
  render() {
    return (
      <div className="data-container">
        {this.props.data.map((el, index) => {
          return (
            <div className="item__container" key={index}>
              <span>Name: {el.name}</span>
              <span>Birth year: {el.birth_year}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
