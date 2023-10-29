import { Component } from "react";
import DataView from "./DataView";
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

type SearchResponse = {
  count: number;
  next: null;
  previous: null;
  results: PeopleResponse[];
};

interface DataFetchState {
  peoples: PeopleResponse[];
}

export default class DataFetch extends Component<
  Record<string, never>,
  DataFetchState
> {
  state = {
    peoples: [],
  };

  async componentDidMount(): Promise<void> {
    const storageData: string = localStorage.getItem("search-query") || "";
    const response: Response = await fetch(
      `https://swapi.dev/api/people${storageData}`,
    );
    const searchResponse: SearchResponse = await response.json();
    const data: PeopleResponse[] = searchResponse.results;
    console.log(data);
    this.setState({
      peoples: data,
    });
  }
  render() {
    return (
      <>
        <DataView data={this.state.peoples} />
      </>
    );
  }
}
