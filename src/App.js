import "./App.css";
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/pages/landing-page/landing-page";
import FormPage from "./components/pages/form-page/form-page";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFormStep, setCurrentFormStep] = useState(1);
  const [userData, setUserData] = useState({});

  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form/:tab" element={<FormPage />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
