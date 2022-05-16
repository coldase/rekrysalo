import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
import { useFormData } from "../../hooks/useFormData";
import Reminder from "./reminder";

const Form4 = () => {
  const [formData, setValues] = useFormData();

  return (
    <div className="form-inner-container">
      <form>
        <div className="form-grp">
          <label htmlFor="4-1">Haastattelutyyppi</label>
          <select
            onChange={(e) => setValues(e)}
            name="form_4_haastettelutyyppi"
            onFocus={() =>
              document.getElementById("valitse3").setAttribute("disabled", true)
            }
            value={
              formData.form_4_haastettelutyyppi
                ? formData.form_4_haastettelutyyppi
                : ""
            }
          >
            <option id="valitse3" default>
              Valitse
            </option>
            <option value="yksilohaastattelu">Yksilöhaastattelu</option>
            <option value="ryhmahaastattelu">Ryhmähaastattelu</option>
            <option value="etahaastattelu">Etähaastattelu</option>
          </select>
        </div>

        <div className="form-grp ">
          <label htmlFor="4-2">Sunnittele haastattelurunko</label>
          <textarea
            className="larger"
            maxLength={1000}
            onChange={(e) => setValues(e)}
            id="4-2"
            name="form_4_haastattelurunko"
            value={
              formData.form_4_haastattelurunko
                ? formData.form_4_haastattelurunko
                : ""
            }
          />
        </div>
        <div className="form-grp">
          <div className="form-4-toggle-esimerkit-container">
            <input
              type="checkbox"
              onChange={(e) => setValues(e)}
              name="form_4_showEsimerkit"
              checked={formData.form_4_showEsimerkit}
            ></input>
            <label>Esimerkki kysymyksiä</label>
          </div>
          {formData.form_4_showEsimerkit && (
            <div className="form-normal-grp-text">
              <p>Muutama esimerkki kysymys:</p>
              <p>
                Miten kuvailisit itseäsi, entä miten muut kuvailisivat sinua?
              </p>
              <p>Miksi haet tätä työpaikkaa?</p>
              <p>Minkälainen on mielestäsi hyvä työympäristö?</p>
              <p>Mitä haluaisit kehittää itsessäsi?</p>
              <p>Mikä on suurin saavutuksesi?</p>
            </div>
          )}
        </div>
      </form>
      <FormNavButtons />
      <Reminder />
    </div>
  );
};

export default Form4;
