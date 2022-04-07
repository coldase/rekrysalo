import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
const Form3 = () => {
  return (
    <div className="form-inner-container">
      <form>
        <div className="form-grp">
          <label htmlFor="3-1">Mieti milloin olet tavoitettavissa</label>
          <input type="text" id="3-1" name="3-1" />
        </div>
        <div className="form-grp">
          <label htmlFor="3-2">Milloin vastaat hakijoille</label>
          <input type="text" id="3-2" name="3-2" />
        </div>
        <div className="form-grp">
          <label htmlFor="2-3">Luonnostele kutsu haastetteluun</label>
          <textarea id="2-3" name="2-3" />
        </div>
        <div className="form-grp">
          <label htmlFor="2-4">
            Luonnostele vastaus hylätyille hakemuksille
          </label>
          <textarea id="2-4" name="2-4" />
        </div>
        <div className="form-check-grp">
          <div>
            <input type="checkbox" id="3-5-1" name="3-5-1"></input>
            <label htmlFor="3-5-1">Esimerkki A</label>
          </div>
          <div>
            <input type="checkbox" id="3-5-2" name="3-5-2"></input>
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
