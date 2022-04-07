import "./form-page.css";
import FormPageNav from "../../form-page-nav/form-page-nav";
import FormContainer from "../../form-container/form-container";

const FormPage = () => {
  return (
    <div className="form-page-container">
      <FormPageNav />
      <FormContainer />
    </div>
  );
};
export default FormPage;
