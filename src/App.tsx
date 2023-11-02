import { Component } from "react";
import Header from "./Header";
import DataView from "./Components/DataVieewer/DataView";
import { AppState, PeopleResponse } from "./apiTypes";
import ErrorButton from "./ErrorButton";

export default class App extends Component<Record<string, never>, AppState> {
  state = { people: [], isLoading: false };

  changeLoadStatus = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  setData = (newData: PeopleResponse[]) => {
    this.setState({
      people: newData,
    });
  };
  render() {
    return (
      <>
        <Header
          changeState={this.setData}
          changeLogStatus={this.changeLoadStatus}
        />
        <DataView data={this.state.people} loadStatus={this.state.isLoading} />
        <ErrorButton />
      </>
    );
  }
}
