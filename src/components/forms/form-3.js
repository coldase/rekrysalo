import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
import { useFormData } from "../../hooks/useFormData";

const Form3 = () => {
  const [formData, setValues] = useFormData();

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

        <div className="form-grp">
          <label htmlFor="3-3">Luonnostele kutsu haastetteluun</label>
          <textarea
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
              onChange={(e) => setValues(e, "check")}
              type="radio"
              id="3-5-1"
              name="form_3_esimerkki"
              checked={
                formData.form_3_esimerkki ? formData.form_3_esimerkki : ""
              }
            ></input>
            <label htmlFor="3-5-1">Esimerkki A</label>
          </div>
          <div>
            <input
              onChange={(e) => setValues(e, "check")}
              type="radio"
              id="3-5-2"
              name="form_3_esimerkki"
              checked={
                formData.form_3_esimerkki ? formData.form_3_esimerkki : ""
              }
            ></input>
            <label htmlFor="3-5-2">Esimerkki B</label>
          </div>
        </div>
        <div className="form-check-grp-text">
          <p>
            A. Kiitos kiinnostuksestasi työpaikkaa kohtaan, valitettavasti
            valinta ei nyt osunut kohdallesi.
          </p>
          <p>
            B. Hei "Hakijan nimi". Valintakriteerimme eivät tälläkertaa
            täyttyneet kohdallasi, sillä "kerro syy".
          </p>
        </div>
      </form>
      <FormNavButtons />
    </div>
  );
};

export default Form3;
