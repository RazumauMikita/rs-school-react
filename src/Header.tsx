import { Component } from "react";
import {
  HeaderProps,
  HeaderState,
  PeopleResponse,
  SearchResponse,
} from "./apiTypes";

export default class Header extends Component<HeaderProps, HeaderState> {
  state = {
    inputValue: localStorage.getItem("search-query") || "",
  };

  inputChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.currentTarget.value });
  };

  buttonClick = () => {
    localStorage.setItem("search-query", this.state.inputValue);
    this.getData();
  };

  async getData() {
    const storageData: string = localStorage.getItem("search-query") || "";
    this.props.changeLogStatus();
    const response: Response = await fetch(
      `https://swapi.dev/api/people/?search=${storageData}`,
    );
    const searchResponse: SearchResponse = await response.json();
    const data: PeopleResponse[] = searchResponse.results;
    this.props.changeState(data);
    this.props.changeLogStatus();
  }

  componentDidMount(): void {
    this.getData();
  }

  render() {
    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.inputChange}
          />
          <button onClick={this.buttonClick}>Search</button>
        </div>
      </>
    );
  }
}
