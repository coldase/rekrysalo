import "./form-container.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Form1 from "../forms/form-1";
import Form2 from "../forms/form-2";
import Form3 from "../forms/form-3";
import Form4 from "../forms/form-4";
import Form5 from "../forms/form-5";
import Form6 from "../forms/form-6";
import Form7 from "../forms/form-7";

const FormContainer = ({ formData, setFormData }) => {
  const params = useParams();

  const autoScrollTop = () => {
    document.querySelector(".form-container").scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    autoScrollTop();
  }, [params.tab]);

  return (
    <div className="form-container">
      <div className="form-container2">
        {params.tab === "1" && (
          <Form1 formData={formData} setFormData={setFormData} />
        )}
        {params.tab === "2" && (
          <Form2 formData={formData} setFormData={setFormData} />
        )}
        {params.tab === "3" && (
          <Form3 formData={formData} setFormData={setFormData} />
        )}
        {params.tab === "4" && (
          <Form4 formData={formData} setFormData={setFormData} />
        )}
        {params.tab === "5" && (
          <Form5 formData={formData} setFormData={setFormData} />
        )}
        {params.tab === "6" && (
          <Form6 formData={formData} setFormData={setFormData} />
        )}
        {params.tab === "7" && (
          <Form7 formData={formData} setFormData={setFormData} />
        )}
      </div>
    </div>
  );
};

export default FormContainer;
