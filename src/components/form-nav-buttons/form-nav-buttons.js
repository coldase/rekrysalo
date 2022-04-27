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
        <PDFDownloadLink document={<MyPdf formData={formData} />}>
          <div className="form-nav-button">
            <p>Lataa PDF</p>
          </div>
        </PDFDownloadLink>
      ) : (
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
