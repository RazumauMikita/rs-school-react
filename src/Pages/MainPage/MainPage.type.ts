import { Person } from "../../apiService/StarWarsService.type";

type MainPageState = {
  people: Person[];
  isLoading: boolean;
};
export type { MainPageState };
