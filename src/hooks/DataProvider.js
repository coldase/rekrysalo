import { createContext, useEffect } from "react";
import { useState } from "react";
import { defaultFormData } from "../data/defaultFormData";

const DataContext = createContext();

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
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    const getOldData = async () => {
      try {
        const res = await localStorage.getItem("formdata");
        if (res) {
          setFormData(JSON.parse(res));
        }
      } catch (e) {
        console.log("Cant get data from localStorage");
      }
    };

    getOldData();
  }, []);

  useEffect(() => {
    const setLocal = async () => {
      try {
        const res = await localStorage.getItem("formdata");

        if (res) {
          if (res !== JSON.stringify(formData)) {
            await localStorage.setItem("formdata", JSON.stringify(formData));
          }
        } else {
          await localStorage.setItem("formdata", JSON.stringify(formData));
        }
      } catch (e) {
        console.log("Cant save data to localStorage");
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

export { DataProvider, DataContext };
