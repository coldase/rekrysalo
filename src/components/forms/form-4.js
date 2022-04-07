import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
const Form4 = () => {
  return (
    <div className="form-inner-container">
      <form>
        <div className="form-grp">
          <label htmlFor="4-1">Haastattelutyyppi</label>
          <select name="4-1">
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
          <label htmlFor="4-2">
            Luonnostele vastaus hylätyille hakemuksille
          </label>
          <textarea className="large" id="4-2" name="4-2" />
        </div>
      </form>
      <FormNavButtons />
    </div>
  );
};

export default Form4;
