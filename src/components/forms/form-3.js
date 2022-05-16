import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
import { useFormData } from "../../hooks/useFormData";
import Reminder from "./reminder";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";

const Form3 = () => {
  const [formData, setValues] = useFormData();
  const [currentRadio, setCurrentRadio] = useState("");

  return (
    <div className="form-inner-container">
      <form>
        <div className="form-grp">
          <label htmlFor="3-1">Mieti milloin olet tavoitettavissa</label>
          <input
            onChange={(e) => setValues(e)}
            type="text"
            id="3-1"
            name="form_3_milloin_tavoitettavissa"
            maxLength={200}
            value={
              formData.form_3_milloin_tavoitettavissa
                ? formData.form_3_milloin_tavoitettavissa
                : ""
            }
          />
        </div>
        <div className="form-grp">
          <label htmlFor="3-2">Milloin vastaat hakijoille</label>
          <input
            maxLength={200}
            onChange={(e) => setValues(e)}
            type="text"
            id="3-2"
            name="form_3_milloin_vastaat"
            value={
              formData.form_3_milloin_vastaat
                ? formData.form_3_milloin_vastaat
                : ""
            }
          />
        </div>

        <p className="vali-ilmoitus">
          Soittaminen on paras tapa kutsua henkilö haastetteluun!
        </p>

        <div className="form-grp">
          <label htmlFor="3-3">Luonnostele kutsu haastetteluun</label>
          <textarea
            className="large"
            onChange={(e) => setValues(e)}
            maxLength={500}
            id="2-3"
            name="form_3_kutsu_haastatteluun"
            value={
              formData.form_3_kutsu_haastatteluun
                ? formData.form_3_kutsu_haastatteluun
                : ""
            }
          />
        </div>
        <div className="form-grp">
          <label htmlFor="2-4">
            Luonnostele vastaus hylätyille hakemuksille
          </label>
          <textarea
            className="large"
            onChange={(e) => setValues(e)}
            maxLength={500}
            id="2-4"
            name="form_3_vastaus_hylatyille_hakemuksille"
            value={
              formData.form_3_vastaus_hylatyille_hakemuksille
                ? formData.form_3_vastaus_hylatyille_hakemuksille
                : ""
            }
          />
        </div>

        <div className="form-check-grp">
          <div>
            <input
              onChange={(e) => setCurrentRadio(e.target.value)}
              type="radio"
              id="3-5-1"
              name="form_3_esimerkki"
              value="Kiitos kiinnostuksestasi työpaikkaa kohtaan. Valitettavasti valinta ei osunut sinuun."
            ></input>
            <label htmlFor="3-5-1">Esimerkki A</label>
          </div>
          <div>
            <input
              onChange={(e) => setCurrentRadio(e.target.value)}
              type="radio"
              id="3-5-2"
              name="form_3_esimerkki"
              value="Hei 'Hakijan nimi'. Valintakriteerimme ei tällä kertaa täyttynyt kohdallasi, sillä 'kerro syy'."
            ></input>
            <label htmlFor="3-5-2">Esimerkki B</label>
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
      </form>
      <FormNavButtons />
      <Reminder />
    </div>
  );
};

export default Form3;
