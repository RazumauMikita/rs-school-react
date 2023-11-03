import { ApiResponse, Person } from "./StarWarsService.type";

export default class StarWarsService {
  root = "https://swapi.dev/api";

  async fetchData(searchQuery: string | null) {
    const response: Response = await fetch(
      `${this.root}/people/?search=${searchQuery}`,
    );
    const searchResponse: ApiResponse = await response.json();
    const data: Person[] = searchResponse.results;
    return data;
  }
}
