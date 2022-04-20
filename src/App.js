/*

  TODO:
    - Info bubblet
    - Preview sivu
    - Tallenna button?

*/

import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/landing-page/landing-page";
import FormPage from "./components/pages/form-page/form-page";
import NotFoundPage from "./components/pages/not-found-page/not-found-page";
import { DataProvider } from "./hooks/dataContext";

const App = () => {
  return (
    <>
      <DataProvider>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/form/:tab" element={<FormPage />} />
            <Route path="*" element={<NotFoundPage />} />{" "}
          </Routes>
        </HashRouter>
      </DataProvider>
    </>
  );
};

export default App;
