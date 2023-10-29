import { Component } from "react";

export default class Header extends Component {
  state = { inputValue: localStorage.getItem("search-query") };
}
