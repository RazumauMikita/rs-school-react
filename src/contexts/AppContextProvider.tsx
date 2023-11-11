import { createContext } from "react";
import { Person } from "../apiService/StarWarsService.type";

type InputValueContextType = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

type PeopleContextType = {
  people: Person[];
  setPeople: React.Dispatch<React.SetStateAction<Person[]>>;
};
export const InputValueContext = createContext<InputValueContextType | null>(
  null,
);

export const PeopleContext = createContext<PeopleContextType | null>(null);
