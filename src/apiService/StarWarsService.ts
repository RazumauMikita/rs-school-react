import { ApiResponse, Person } from "./StarWarsService.type";

export default class StarWarsService {
  root = "https://swapi.dev/api";

  async fetchData(
    searchQuery: string | null,
    page?: string,
  ): Promise<ApiResponse> {
    const pageNumber = page ? `&page=${page}` : "";
    const response: Response = await fetch(
      `${this.root}/people/?search=${searchQuery}${pageNumber}`,
    );
    const searchResponse: ApiResponse = await response.json();
    return searchResponse;
  }

  async fetchPerson(id: number) {
    const url = `${this.root}/people/${id}`;
    const response: Response = await fetch(url);
    const searchResponse: Person = await response.json();
    return searchResponse;
  }
}
