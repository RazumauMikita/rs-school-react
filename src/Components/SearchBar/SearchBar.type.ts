import { Person } from "../../apiService/StarWarsService.type";

type SearchBarState = {
  inputValue: string;
};

type SearchBarProps = {
  changeState: (newData: Person[]) => void;
  changeLogStatus: (status: boolean) => void;
};

export type { SearchBarState, SearchBarProps };
