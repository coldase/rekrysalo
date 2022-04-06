import "./landing-page.css";

import LandingPageContent from "../../landingpage-content-box/landing-page-content";
import Footer from "../../footer/footer";
const LandingPage = () => {
  return (
    <div className="landingpage-container">
      <LandingPageContent />
      <Footer />
    </div>
  );
};

export default LandingPage;
