import { Component } from "react";

export default class ErrorButton extends Component {
  state = { throwError: false };

  makeError = () => {
    this.setState({ throwError: true });
  };
  render() {
    if (this.state.throwError) {
      throw new Error("this is Error");
    }
    return <button onClick={this.makeError}>Make Error</button>;
  }
}
