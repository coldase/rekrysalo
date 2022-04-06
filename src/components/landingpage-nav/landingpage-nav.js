import "./landingpage-nav.css";
import LandingPageNavBlock from "./landingpage-nav-block/landingpage-nav-block";
const LandingPageNav = () => {
  return (
    <div className="landingpage-nav-container">
      <LandingPageNavBlock number={1} />
      <LandingPageNavBlock number={2} />
      <LandingPageNavBlock number={3} />
      <LandingPageNavBlock number={4} />
      <LandingPageNavBlock number={5} />
      <LandingPageNavBlock number={6} />
    </div>
  );
};

export default LandingPageNav;
