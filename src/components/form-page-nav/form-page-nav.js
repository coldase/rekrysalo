import "./form-page-nav.css";
import FormPageNavBlock from "./form-page-nav-block/form-page-nav-block";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineCheck } from "react-icons/ai";
import { useParams } from "react-router-dom";
const FormPageNav = () => {
  const params = useParams();
  return (
    <div className="form-page-nav-container">
      <div className="form-page-nav-block-container">
        <Link to="/" className="form-page-nav-home">
          <AiFillHome />
        </Link>
        <FormPageNavBlock number={1} text="Osaamisen tarve" />
        <FormPageNavBlock number={2} text="Työpaikka-ilmoitus" />
        <FormPageNavBlock number={3} text="Hakemuksen käsittely" />
        <FormPageNavBlock number={4} text="Haastattelu" />
        <FormPageNavBlock number={5} text="Sopimus" />
        <FormPageNavBlock number={6} text="Perehdytys" />

        <Link to="/form/7" className="form-page-nav-preview">
          <AiOutlineCheck id={params.tab == 7 ? "checked" : null} />
        </Link>
      </div>
    </div>
  );
};

export default FormPageNav;
