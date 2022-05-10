import "./landing-page-content.css";
import LandingPageNav from "../landingpage-nav/landingpage-nav";
import {
  BsFillExclamationCircleFill,
  BsFillQuestionCircleFill,
} from "react-icons/bs";

const LandingPageContent = () => {
  return (
    <div className="landingpage-content">
      <h1>Pienyrittäjän rekryopas</h1>
      <div className="landingpage-content-grp1">
        <p>
          Tämä opas on suunnattu ensimmäistä työntekijäänsä rekrytoivalle pien-
          tai mikroyrittäjälle.
        </p>
        <p>Täytä kohdat, jotka koet itsellesi hyödylliseksi.</p>
      </div>
      <div className="landingpage-content-grp2">
        <p>1. Millaisesta osaamisesta yrityksesi hyötyy?</p>
        <p>2. Miten laadit kiinnostavan työpaikkailmoituksen?</p>
        <p>3. Miten valitset sopivat ehdokkaat haastatteluun?</p>
        <p>4. Kuinka valmistaudun työhaastattelun tekemiseen?</p>
        <p>5. Mitä sisältyy työsopimukseen?</p>
        <p>6. Mitä kuuluu onnistuneeseen perehdytykseen?</p>
      </div>
      <LandingPageNav />
      <div className="landingpage-content-grp3">
        <BsFillExclamationCircleFill className="landingpage-hint-icon" />
        <BsFillQuestionCircleFill className="landingpage-hint-icon" />
        <div className="landingpage-hint-text">
          <p>Vinkki- ja ohjenappien takaa löydät vinkkejä ja neuvoja.</p>
        </div>
      </div>
    </div>
  );
};
export default LandingPageContent;
