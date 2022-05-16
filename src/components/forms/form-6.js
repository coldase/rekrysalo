import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
import Reminder from "./reminder";

const Form6 = () => {
  return (
    <div className="form-inner-container">
      <form>
        <p>
          Perehdytys on sinulle erittäin hyödyllinen. Hyvä perehdytys varmistaa
          sujuvan työnaloituksen ja säästää aikaasi ja rahaasi.
        </p>
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
      <div className="vali"></div>
      <FormNavButtons />
      <Reminder />
    </div>
  );
};

export default Form6;
