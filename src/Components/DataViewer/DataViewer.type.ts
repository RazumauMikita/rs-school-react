import type { Person } from "../../apiService/StarWarsService.type";
type DataViewerProps = {
  data: Person[];
  loadStatus: boolean;
  page: string;
  setToggleSide: React.Dispatch<React.SetStateAction<boolean>>;
};

export type { DataViewerProps };
