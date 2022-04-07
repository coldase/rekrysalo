import "./form-nav-buttons.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const FormNavButtons = () => {
  const params = useParams();

  return (
    <div className="form-nav-buttons-container">
      <Link
        to={
          parseInt(params.tab) > 1 ? `/form/${parseInt(params.tab) - 1}` : "/"
        }
        className="form-nav-button"
      >
        <p>Edellinen</p>
      </Link>
      <div className="form-nav-button">
        <p>Tallenna</p>
      </div>
      <Link
        to={
          parseInt(params.tab) < 7 ? `/form/${parseInt(params.tab) + 1}` : "/"
        }
        className="form-nav-button"
      >
        <p>Seuraava</p>
      </Link>
    </div>
  );
};

export default FormNavButtons;
