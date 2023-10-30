import { Component } from "react";
import Header from "./Header";
import DataView from "./DataView";
import { AppState, PeopleResponse } from "./apiTypes";

export default class App extends Component<Record<string, never>, AppState> {
  state = { people: [] };

  setData = (newData: PeopleResponse[]) => {
    this.setState({
      people: newData,
    });
  };
  render() {
    return (
      <>
        <Header changeState={this.setData} />
        <DataView data={this.state.people} />
      </>
    );
  }
}
