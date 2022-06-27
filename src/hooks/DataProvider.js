import { createContext, useEffect, useTransition } from "react";
import { useState } from "react";
import { defaultFormData } from "../data/defaultFormData";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [, startTransistion] = useTransition();
  const [formData, setFormData] = useState(defaultFormData);

  // Set values into data state when typing in forms
  const setValues = (e) => {
    startTransistion(() => {
      if (e !== "reset") {
        setFormData({
          ...formData,
          [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value,
          form_started: true,
        });
      } else {
        setFormData(defaultFormData);
      }
    });
  };

  // Get old form data from localstorage and set into state if found
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

  // Save formdata into localstorage when formdata changes
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
