import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
import { useState } from "react";
const Form1 = ({ formData, setFormData }) => {
  const setValues = (e, type = "normal") => {
    if (type === "check") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="form-inner-container">
      <form>
        <div className="form-grp">
          <label>
            Mieti millaista osaamista yrityksesi tarvitsee nyt ja
            tulevaisuudessa
          </label>
          <input
            onChange={(e) => setValues(e)}
            type="text"
            id="1-1"
            name="form_1_osaaminen"
            value={formData.form_1_osaaminen ? formData.form_1_osaaminen : ""}
          />
        </div>
        <div className="form-grp">
          <label htmlFor="1-2">Arvioi budjetti rekrytoinnille</label>
          <textarea
            onChange={(e) => setValues(e)}
            id="1-2"
            name="form_1_budjetti"
            value={formData.form_1_budjetti ? formData.form_1_budjetti : ""}
          />
        </div>
        <div className="form-grp">
          <label htmlFor="1-3">
            Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet
          </label>
          <textarea
            type="text"
            id="1-3"
            name="form_1_tavoitteet"
            onChange={(e) => setValues(e)}
            value={formData.form_1_tavoitteet ? formData.form_1_tavoitteet : ""}
          />
        </div>
        <div className="form-check-grp">
          <div>
            <input
              onChange={(e) => setValues(e, "check")}
              type="checkbox"
              id="1-4-1"
              name="form_1_esimerkki_a"
              checked={formData.form_1_esimerkki_a ? true : false}
            ></input>
            <label htmlFor="1-4-1">Esimerkki A</label>
          </div>
          <div>
            <input
              onChange={(e) => setValues(e, "check")}
              type="checkbox"
              id="1-4-2"
              name="form_1_esimerkki_b"
              checked={formData.form_1_esimerkki_b ? true : false}
            ></input>
            <label htmlFor="1-4-2">Esimerkki B</label>
          </div>
          <div>
            <input
              onChange={(e) => setValues(e, "check")}
              type="checkbox"
              id="1-4-3"
              name="form_1_esimerkki_c"
              checked={formData.form_1_esimerkki_c ? true : false}
            ></input>
            <label htmlFor="1-4-3">Esimerkki C</label>
          </div>
        </div>
        <div className="form-check-grp-text">
          <p>
            A. Koska yrityksemme tarvitsee uusia asiakkaita, yksi ensivuoden
            päätavoitteista on uusi asiakashankinta.
          </p>
          <p>B. Koska nyt on joulusesonki, tarvitsemme jouluapulaista.</p>
          <p>C. Tuotantomme on kasvussa.</p>
        </div>
        <div className="form-grp">
          <label htmlFor="1-5">Aikatauluta rekrytointi</label>
          <textarea
            onChange={(e) => setValues(e)}
            type="text"
            id="1-5"
            name="form_1_aikataulutus"
            value={
              formData.form_1_aikataulutus ? formData.form_1_aikataulutus : ""
            }
          />
        </div>
      </form>
      <FormNavButtons />
    </div>
  );
};

export default Form1;
