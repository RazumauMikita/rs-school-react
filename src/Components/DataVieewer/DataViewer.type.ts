import type { PeopleResponse } from "../../apiTypes";
type DataViewerProps = {
  data: PeopleResponse[];
  loadStatus: boolean;
};

type DataViewerState = {};

export type { DataViewerProps, DataViewerState };
