import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
import "./form.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Form2 = () => {
  return (
    <div className="form-inner-container">
      <form>
        <div className="form-grp">
          <label htmlFor="2-1">Yrityksen sijainti</label>
          <input type="text" id="2-1" name="2-1" />
        </div>
        <div className="form-check-grp">
          <div>
            <input type="checkbox" id="2-2-1" name="2-2-1"></input>
            <label htmlFor="2-2-1">Etätyö tai monta sijaintia</label>
          </div>
          <div>
            <input type="checkbox" id="2-2-2" name="2-2-2"></input>
            <label htmlFor="2-2-2">Työpaikalla eri sijainti</label>
          </div>
        </div>
        <div className="form-grp">
          <label htmlFor="2-3">Työsopimuksen tyyppi</label>
          <select name="2-3">
            <option disabled>Valitse</option>
            <option value="maaraaikainen">Määräaikainen</option>
            <option value="vakituinen">Vakituinen</option>
            <option value="harjoittelija">Harjoittelija</option>
          </select>
        </div>
        <div className="form-grp">
          <label htmlFor="2-4">Työaika</label>
          <select name="2-4">
            <option disabled>Valitse</option>
            <option value="maaraaikainen">Osa-aikainen</option>
            <option value="vakituinen">Kokoaikainen</option>
          </select>
        </div>
        <div className="form-grp">
          <label htmlFor="2-5">Tehtävänimike</label>
          <input type="text" id="2-5" name="2-5" />
        </div>
        <div className="form-grp">
          <label htmlFor="2-6">Yrityksen kuvaus</label>
          <textarea id="2-6" name="2-6" />
        </div>
        <div className="form-grp">
          <label htmlFor="2-7">Työn kuvaus</label>
          <textarea id="2-7" name="2-7" />
        </div>
        <div className="form-grp">
          <label htmlFor="2-8">Ilmoittajan nimi</label>
          <input type="text" id="2-8" name="2-8" />
        </div>
        <div className="form-grp">
          <label htmlFor="2-9">Hakemusten vastaanotto sähköposti</label>
          <input type="text" id="2-9" name="2-9" />
        </div>
        <div className="form-grp">
          <label htmlFor="2-10">Ilmoittajan puhelin</label>
          <input type="text" id="2-10" name="2-10" />
        </div>

        <div className="form-grp">
          <label htmlFor="2-11">Julkaisuaika</label>
          <div className="form-horizontal-grp">
            <input type="date" id="2-11-1" name="2-11-1" />
            <HiOutlineArrowNarrowRight className="arrow-icon" />
            <input type="date" id="2-11-2" name="2-11-2" />
          </div>
        </div>

        <div className="form-grp">
          <label htmlFor="2-7">Yhteyshenkilöt ja heidän yhteystietonsa</label>
          <textarea id="2-7" name="2-7" />
        </div>
      </form>
      <FormNavButtons />
    </div>
  );
};

export default Form2;
