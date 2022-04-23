/*

  TODO:
    - Infobubble linkit
    - Preview sivu
    - Tallenna button?

    - form 1 bottom "vinkki napin takaa löydät..."
    - form 2 top "suosituimmat työpaikkojen..."
    - form 2 bottom kuvanlataus
    
*/

import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/landing-page/landing-page";
import FormPage from "./components/pages/form-page/form-page";
import NotFoundPage from "./components/pages/not-found-page/not-found-page";
import { DataProvider } from "./hooks/DataProvider";

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
