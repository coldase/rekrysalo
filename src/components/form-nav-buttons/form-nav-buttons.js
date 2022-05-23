import "./form-nav-buttons.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";
import { handlePdf } from "../pdfcontainer/pdfcontainer";

const FormNavButtons = () => {
  const params = useParams();
  const [formData] = useFormData();

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
        <div className="form-nav-button" onClick={() => handlePdf(formData)}>
          <p>Lataa PDF</p>
        </div>
      ) : null}
      {params.tab === "7" ? (
        <Link to="/" className="form-nav-button">
          <p>Etusivulle</p>
        </Link>
      ) : (
        <Link
          to={
            parseInt(params.tab) < 7 ? `/form/${parseInt(params.tab) + 1}` : "/"
          }
          className="form-nav-button"
        >
          <p>Seuraava</p>
        </Link>
      )}
    </div>
  );
};

export default FormNavButtons;
