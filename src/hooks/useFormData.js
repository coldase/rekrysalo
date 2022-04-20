import { DataContext } from "./DataProvider";
import { useContext } from "react";

const useFormData = () => {
  return useContext(DataContext);
};

export { useFormData };
