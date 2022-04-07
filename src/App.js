import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import LandingPage from "./components/pages/landing-page/landing-page";
import FormPage from "./components/pages/form-page/form-page";
import { defaultFormData } from "./data/defaultFormData";

const App = () => {
  const [formData, setFormData] = useState(defaultFormData);

  useEffect(() => {
    const getOldData = async () => {
      const res = await localStorage.getItem("formdata");
      if (res) {
        setFormData(JSON.parse(res));
        console.log("OLD DATA LOADED");
      }
    };

    getOldData();
  }, []);

  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/form/:tab"
            element={<FormPage formData={formData} setFormData={setFormData} />}
          />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
