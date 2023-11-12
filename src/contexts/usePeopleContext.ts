import { useContext } from "react";
import { PeopleContext } from "./AppContextProvider";

export const usePeopleContext = () => {
  const context = useContext(PeopleContext);
  if (!context) {
    throw new Error("must be used within a PeopleContext Provider");
  }
};
