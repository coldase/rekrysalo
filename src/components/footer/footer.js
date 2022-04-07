import "./footer.css";
import YritysSaloLogo from "../../assets/pics/yrityssalologo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <img src={YritysSaloLogo} alt="yrityssalologo" />

      <div className="footer-info-container">
        <div className="footer-info-grp">
          <p>Joensuunkatu 7</p>
          <p>24100 SALO</p>
          <p>+358 44 778 2142</p>
          <p>Yrityssalo@yrityssalo.fi</p>
        </div>
        <div className="footer-info-grp">
          <p>toihinsaloon.fi</p>
          <p>investinsalo.fi</p>
          <p>
            <nobr>Vapaat toimitilat</nobr>
          </p>
          <p>visitsalo.fi</p>
        </div>
        <div className="footer-info-grp">
          <a href="https://twitter.com">Twitter</a>
          <a href="https://linkedin.com">LindedIn</a>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
