import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
const Form3 = ({ formData, setFormData }) => {
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
          <label htmlFor="3-1">Mieti milloin olet tavoitettavissa</label>
          <input
            onChange={(e) => setValues(e)}
            type="text"
            id="3-1"
            name="form_3_milloin_tavoitettavissa"
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
          <label htmlFor="2-3">Luonnostele kutsu haastetteluun</label>
          <textarea
            onChange={(e) => setValues(e)}
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
              type="checkbox"
              id="3-5-1"
              name="form_3_esimerkki_a"
              checked={
                formData.form_3_esimerkki_a ? formData.form_3_esimerkki_a : ""
              }
            ></input>
            <label htmlFor="3-5-1">Esimerkki A</label>
          </div>
          <div>
            <input
              onChange={(e) => setValues(e, "check")}
              type="checkbox"
              id="3-5-2"
              name="form_3_esimerkki_b"
              checked={
                formData.form_3_esimerkki_b ? formData.form_3_esimerkki_b : ""
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
