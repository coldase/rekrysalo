import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
import { useFormData } from "../../hooks/useFormData";

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
            value={
              formData.form_4_haastettelutyyppi
                ? formData.form_4_haastettelutyyppi
                : ""
            }
          >
            <option disabled>Valitse</option>
            <option value="yksilohaastattelu">Yksilöhaastattelu</option>
            <option value="ryhmahaastattelu">Ryhmähaastattelu</option>
            <option value="etahaastattelu">Etähaastattelu</option>
          </select>
        </div>
        <div className="form-normal-grp-text">
          <p>Muutama esimerkki kysymys:</p>
          <p>Miten kuvailisit itseäsi, entä miten muut kuvailisivat sinua?</p>
          <p>Miksi haet tätä työpaikkaa?</p>
          <p>Minkälainen on mielestäsi hyväympäristö?</p>
          <p>Mitä haluaisit kehittää itsessäsi?</p>
          <p>Mikä on suurin saavutuksesi?</p>
        </div>
        <div className="form-grp ">
          <label htmlFor="4-2">Sunnittele haastattelurunko</label>
          <textarea
            className="large"
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
      </form>
      <FormNavButtons />
    </div>
  );
};

export default Form4;
