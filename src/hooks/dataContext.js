import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { defaultFormData } from "../data/defaultFormData";

const DataContext = createContext();

const useFormData = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const [formData, setFormData] = useState(defaultFormData);

  const setValues = (e) => {
    if (e !== "reset") {
      setFormData({
        ...formData,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      });
    } else {
      setFormData(defaultFormData);
    }
  };

  useEffect(() => {
    const getOldData = async () => {
      const res = await localStorage.getItem("formdata");
      if (res) {
        setFormData(JSON.parse(res));
      }
    };

    getOldData();
  }, []);

  useEffect(() => {
    const setLocal = async () => {
      const res = await localStorage.getItem("formdata");

      if (res) {
        if (res !== JSON.stringify(formData)) {
          await localStorage.setItem("formdata", JSON.stringify(formData));
        }
      } else {
        await localStorage.setItem("formdata", JSON.stringify(formData));
      }
    };
    setLocal();
  }, [formData]);

  return (
    <DataContext.Provider value={[formData, setValues]}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, useFormData };
