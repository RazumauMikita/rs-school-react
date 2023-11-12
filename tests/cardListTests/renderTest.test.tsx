import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { cardList } from "./cardList";
import { jest } from "@jest/globals";
import DataViewerF from "../../src/Components/DataViewer/DataViewer";
import { Person } from "../../src/apiService/StarWarsService.type";
import { Mock, UnknownFunction } from "jest-mock";
const SPECIFIED_NUMBERS_OF_CARDS: number = 2;
window.React = React;

let realUseContext: <T>(context: React.Context<T>) => T;
let useContextMock: Mock<UnknownFunction>;

beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = jest.fn();
});

afterEach(() => {
  React.useContext = realUseContext;
});
type PeopleContextType = {
  people: Person[];
  setPeople: React.Dispatch<React.SetStateAction<Person[]>>;
};
const defaultValueFill: PeopleContextType = {
  people: cardList,
  setPeople: jest.fn(),
};
const defaultValueVoid: PeopleContextType = {
  people: [],
  setPeople: jest.fn(),
};

describe("test Card List", () => {
  test("DataView component renders the specified number of cards", async () => {
    useContextMock.mockReturnValue(defaultValueFill);
    const element = new ShallowRenderer().render(
      <DataViewerF loadStatus={false} page={"1"} setToggleSide={jest.fn()} />,
    );
    expect(element.props.children).toHaveLength(SPECIFIED_NUMBERS_OF_CARDS);
  });

  test("An appropriate message is displayed if no cards are present", () => {
    useContextMock.mockReturnValue(defaultValueVoid);
    const element = new ShallowRenderer().render(
      <DataViewerF loadStatus={false} page={"1"} setToggleSide={jest.fn()} />,
    );
    console.log(element.props.children[1]);
    expect(element.props.children[1]).toEqual(
      <h2 title="missing data message">There are not cards</h2>,
    );
  });
});
