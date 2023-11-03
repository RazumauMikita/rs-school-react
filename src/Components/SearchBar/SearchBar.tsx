import { Component } from "react";
import { SearchBarProps, SearchBarState } from "./SearchBar.type";
import { Person } from "../../apiService/StarWarsService.type";
import StarWarsService from "../../apiService/StarWarsService";

export default class SearchBar extends Component<
  SearchBarProps,
  SearchBarState
> {
  service: StarWarsService;
  constructor(props: SearchBarProps) {
    super(props);
    this.service = new StarWarsService();
  }
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
    const searchQuery: string = localStorage.getItem("search-query") || "";
    this.props.changeLogStatus();
    const data: Person[] = await this.service.fetchData(searchQuery);
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
