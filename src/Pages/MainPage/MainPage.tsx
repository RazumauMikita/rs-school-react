import { Component } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ErrorButton from "../../ErrorButton";
import { Person } from "../../apiService/StarWarsService.type";
import DataViewer from "../../Components/DataViewer/DataViewer";
import { MainPageState } from "./MainPage.type";
export default class MainPage extends Component<
  Record<string, never>,
  MainPageState
> {
  state = { people: [], isLoading: false };

  changeLoadStatus = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  setData = (newData: Person[]) => {
    this.setState({
      people: newData,
    });
  };
  render() {
    return (
      <>
        <SearchBar
          changeState={this.setData}
          changeLogStatus={this.changeLoadStatus}
        />
        <DataViewer
          data={this.state.people}
          loadStatus={this.state.isLoading}
        />
        <ErrorButton />
      </>
    );
  }
}
