import "./form-nav-buttons.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormData } from "../../hooks/useFormData";

import { PDFDownloadLink } from "@react-pdf/renderer";
import MyPdf from "../PDF/MyPdf";

const FormNavButtons = () => {
  const params = useParams();
  const [formData, setFormData] = useFormData();

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
        // <div className="form-nav-button">
        <PDFDownloadLink
          className="form-nav-button"
          document={<MyPdf formData={formData} />}
        >
          <p>Lataa PDF</p>
        </PDFDownloadLink>
      ) : (
        // </div>
        <div className="form-nav-button" id="hidden-btn">
          <p>Tallenna</p>
        </div>
      )}
      {params.tab === "7" ? (
        <div className="form-nav-button" onClick={() => setFormData("reset")}>
          <p>Tyhjennä</p>
        </div>
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
