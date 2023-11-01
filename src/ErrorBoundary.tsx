import { Component } from "react";
import { ErrorBoundaryProps } from "./apiTypes";

export default class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  setError = () => {
    this.setState({ hasError: true });
  };
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
