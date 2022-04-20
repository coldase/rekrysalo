import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useFormData } from "../../hooks/dataContext";

const Form6 = () => {
  const [formData, setValues] = useFormData();

  return (
    <div className="form-inner-container">
      <form>
        <p>
          Perehdytys on sinulle erittäin hyödyllinen. Hyvä perehdytys varmistaa
          sujuvan työnaloituksen ja säästää aikaasi ja rahaasi.
        </p>
        <div className="vali"></div>
        <div className="form-grp">
          <label htmlFor="6-1">Varaa tarpeeksi aikaa perehdytystä varten</label>
          <div className="form-horizontal-grp">
            <input
              onChange={(e) => setValues(e)}
              type="date"
              id="6-1-1"
              name="form_6_perehdytysaika_from"
              value={
                formData.form_6_perehdytysaika_from
                  ? formData.form_6_perehdytysaika_from
                  : ""
              }
            />
            <HiOutlineArrowNarrowRight className="arrow-icon" />
            <input
              onChange={(e) => setValues(e)}
              type="date"
              id="6-1-2"
              name="form_6_perehdytysaika_to"
              value={
                formData.form_6_perehdytysaika_to
                  ? formData.form_6_perehdytysaika_to
                  : ""
              }
            />
          </div>
        </div>
      </form>
      <div className="form-normal3-grp-text">
        <p>Perehdytykseen tulee kuulua ainakin:</p>
        <p>
          - Työvälineisiin, työympäristöön ja sen toimintatapoihin tutustuminen
        </p>
        <p>- Pelastusopastus</p>
        <p>- Työterveyshuolto</p>
        <p>- Työturvallisuus</p>
        <div className="vali"></div>
        <p>Perehdytys on työturvallisuuslain nojalla pakollinen toteuttaa.</p>
      </div>
      <FormNavButtons />
    </div>
  );
};

export default Form6;
