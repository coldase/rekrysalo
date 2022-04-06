import "./landingpage-nav-block.css";
import { Link } from "react-router-dom";

const LandingPageNavBlock = ({ number }) => {
  return (
    <Link to={`/form/${number}`} className="landingpage-nav-block">
      <p>{number}</p>
    </Link>
  );
};

export default LandingPageNavBlock;
