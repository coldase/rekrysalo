import "./form-page-nav-block.css";
import { Link, useParams } from "react-router-dom";

const FormPageNavBlock = ({ number, text }) => {
  const param = useParams();

  return (
    <Link
      to={`/form/${number}`}
      className="form-page-nav-block"
      id={param.tab === number.toString() ? "selected-tab" : ""}
    >
      <p>{number}</p>
      <p>{text}</p>
    </Link>
  );
};

export default FormPageNavBlock;
