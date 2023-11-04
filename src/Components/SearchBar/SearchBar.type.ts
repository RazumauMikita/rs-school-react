import { Person } from "../../apiService/StarWarsService.type";

type SearchBarState = {
  inputValue: string;
};

type SearchBarProps = {
  changeState: (newData: Person[]) => void;
  changeLogStatus: (status: boolean) => void;
  setItems: React.Dispatch<React.SetStateAction<number>>;
  page?: string;
};

export type { SearchBarState, SearchBarProps };
