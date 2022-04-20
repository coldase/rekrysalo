import "./form-nav-buttons.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";
const FormNavButtons = () => {
  const params = useParams();
  const [, setFormData] = useFormData();

  const handlePrint = () => {
    setFormData("reset");
  };

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
      {params.tab === "7" ? (
        <div className="form-nav-button" onClick={handlePrint}>
          <p>Tulosta</p>
        </div>
      ) : (
        <div className="form-nav-button">
          <p>Tallenna</p>
        </div>
      )}
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
