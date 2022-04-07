import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Form6 = () => {
  return (
    <div className="form-inner-container">
      <form>
        <p>
          Perehdytys on sinulle erittäin hyödyllinen. Hyvä perehdytys varmistaa
          sujuvan työnaloituksen ja säästää aikaasi ja rahaasi.
        </p>
        <div className="form-grp">
          <label htmlFor="6-1">Varaa tarpeeksi aikaa perehdytystä varten</label>
          <div className="form-horizontal-grp">
            <input type="date" id="6-1-1" name="6-1-1" />
            <HiOutlineArrowNarrowRight className="arrow-icon" />
            <input type="date" id="6-1-2" name="6-1-2" />
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
        <p>Perehdytys on työturvallisuuslain nojalla pakollinen toteuttaa.</p>
      </div>
      <FormNavButtons />
    </div>
  );
};

export default Form6;
