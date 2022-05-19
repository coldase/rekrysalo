import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
import { useFormData } from "../../hooks/useFormData";
import copy from "copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import { useState } from "react";
import Reminder from "./reminder";

const Form1 = () => {
  const [formData, setValues] = useFormData();

  const [currentRadio, setCurrentRadio] = useState("");
  return (
    <div className="form-inner-container">
      <form>
        <div className="form-grp">
          <label>
            Mieti millaista osaamista yrityksesi tarvitsee nyt ja
            tulevaisuudessa
          </label>
          <textarea
            onChange={(e) => setValues(e)}
            maxLength={550}
            type="text"
            id="1-1"
            className="large"
            name="form_1_osaaminen"
            value={formData.form_1_osaaminen ? formData.form_1_osaaminen : ""}
          />
        </div>
        <div className="form-grp">
          <label htmlFor="1-3">
            Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet
          </label>
          <textarea
            className="large"
            type="text"
            maxLength={550}
            id="1-3"
            name="form_1_tavoitteet"
            onChange={(e) => setValues(e)}
            value={formData.form_1_tavoitteet ? formData.form_1_tavoitteet : ""}
          />
        </div>
        <div className="form-check-grp">
          <div>
            <input
              onChange={(e) => setCurrentRadio(e.target.value)}
              type="radio"
              id="1-4-1"
              name="form_1_esimerkki"
              value="Koska yrityksemme tarvitsee uusia asiakkaita, yksi ensivuoden päätavoitteista on uudisasiakashankinta"
            ></input>
            <label htmlFor="1-4-1">Esimerkki A</label>
          </div>
          <div>
            <input
              onChange={(e) => setCurrentRadio(e.target.value)}
              type="radio"
              id="1-4-2"
              name="form_1_esimerkki"
              value="Koska nyt on joulusesonki, tarvitsemme jouluapulaista."
            ></input>
            <label htmlFor="1-4-2">Esimerkki B</label>
          </div>
          <div>
            <input
              onChange={(e) => setCurrentRadio(e.target.value)}
              type="radio"
              id="1-4-3"
              name="form_1_esimerkki"
              value="Tuotantomme on kasvussa"
            ></input>
            <label htmlFor="1-4-3">Esimerkki C</label>
          </div>
        </div>
        {currentRadio && (
          <div className="form-check-grp-text">
            <div>
              <MdContentCopy
                title="Copy text"
                className="copy-icon"
                onClick={() => copy(currentRadio)}
              />
            </div>
            <p>{currentRadio}</p>
          </div>
        )}
        <div className="form-grp">
          <label htmlFor="1-5">Aikatauluta rekrytointisi</label>
          <textarea
            className="large"
            onChange={(e) => setValues(e)}
            type="text"
            id="1-5"
            name="form_1_aikataulutus"
            maxLength={550}
            value={
              formData.form_1_aikataulutus ? formData.form_1_aikataulutus : ""
            }
          />
        </div>
        <div className="form-grp">
          <label htmlFor="1-2">Arvioi budjetti rekrytoinnille</label>
          <textarea
            className="large"
            maxLength={550}
            onChange={(e) => setValues(e)}
            id="1-2"
            name="form_1_budjetti"
            value={formData.form_1_budjetti ? formData.form_1_budjetti : ""}
          />
        </div>
      </form>
      <FormNavButtons />
      <Reminder />
    </div>
  );
};

export default Form1;
