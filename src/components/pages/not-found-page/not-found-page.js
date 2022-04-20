import "./not-found-page.css";
import { Link } from "react-router-dom";
import Footer from "../../footer/footer";

const NotFoundPage = () => {
  return (
    <div className="pagenotfound-container">
      <div className="pagenotfound-content">
        <p>404</p>
        <p>Sivua ei löydy</p>
        <Link to="/" className="etusivu-btn">
          <p>Palaa etusivulle</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
