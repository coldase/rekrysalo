import "./form-page.css";
import FormPageNav from "../../form-page-nav/form-page-nav";
import FormContainer from "../../form-container/form-container";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const FormPage = ({ formData, setFormData }) => {
  const params = useParams();

  useEffect(() => {
    const setLocal = async () => {
      const res = await localStorage.getItem("formdata");

      if (res) {
        if (res !== JSON.stringify(formData)) {
          await localStorage.setItem("formdata", JSON.stringify(formData));
          console.log("DATA SET");
        }
      } else {
        await localStorage.setItem("formdata", JSON.stringify(formData));
        console.log("FIRST DATA SET");
      }
    };
    setLocal();
  }, [params.tab]);

  return (
    <div className="form-page-container">
      <FormPageNav />

      <FormContainer formData={formData} setFormData={setFormData} />
    </div>
  );
};
export default FormPage;
