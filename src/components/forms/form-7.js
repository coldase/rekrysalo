import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
import { FaThumbsUp } from "react-icons/fa";

const Form7 = () => {
  return (
    <div className="form-inner-container">
      <div className="thumbs-container">
        <p>Valmista tuli!</p>
        <FaThumbsUp className="thumbs-icon" />
      </div>
      <FormNavButtons />
    </div>
  );
};

export default Form7;
