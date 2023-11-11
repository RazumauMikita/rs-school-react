import { SetURLSearchParams } from "react-router-dom";

type SearchBarState = {
  inputValue: string;
};

type SearchBarProps = {
  changeLogStatus: (status: boolean) => void;
  setItems: React.Dispatch<React.SetStateAction<number>>;
  setURLParams: SetURLSearchParams;
  page?: string;
};

export type { SearchBarState, SearchBarProps };
