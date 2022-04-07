import "./form-page.css";
import FormPageNav from "../../form-page-nav/form-page-nav";
import FormContainer from "../../form-container/form-container";
import { useParams } from "react-router-dom";

const FormPage = ({ formData, setFormData }) => {
  const params = useParams();
  return (
    <div className="form-page-container">
      <FormPageNav />

      <FormContainer formData={formData} setFormData={setFormData} />
    </div>
  );
};
export default FormPage;
