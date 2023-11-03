import { Person } from "../../apiService/StarWarsService.type";

type SearchBarState = {
  inputValue: string;
};

type SearchBarProps = {
  changeState: (newData: Person[]) => void;
  changeLogStatus: () => void;
};

export type { SearchBarState, SearchBarProps };
