import { ReactNode } from "react";

type PeopleResponse = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
};

type SearchResponse = {
  count: number;
  next: null;
  previous: null;
  results: PeopleResponse[];
};

interface DataViewProps {
  data: PeopleResponse[];
  loadStatus: boolean;
}

interface HeaderState {
  inputValue: string;
}

interface HeaderProps {
  changeState: (newData: PeopleResponse[]) => void;
  changeLogStatus: () => void;
}

interface AppState {
  people: PeopleResponse[];
  isLoading: boolean;
}

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

export type {
  PeopleResponse,
  SearchResponse,
  DataViewProps,
  HeaderState,
  HeaderProps,
  AppState,
  ErrorBoundaryProps,
};
