import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";

const Form5 = () => {
  return (
    <div className="form-inner-container">
      <div className="form-normal2-grp-text">
        <p>
          Työsopimus voi olla kirjallinen, suullinen tai sähköinen. On{" "}
          <span>suositeltavaa tehdä kirjallisesti</span>, jotta sovitut asiat
          voidaan tarvittaessa tarkistaa.
        </p>
        <p>
          Ota tehdessä huomioon{" "}
          <span>
            työsopimuslain, työaikalain ja vuosilomalain säädökset, sekä
            työehtosopimuksen määräykset.
          </span>
          Mikäli allekirjoitetussa sopimuksessa on sovittu edellämainittujen
          vastaisia asioita, ne eivät ole päteviä.
        </p>
        <p>
          <span>Työsopimuksen kesto on sovittava.</span>Se voi olla
          toistaiseksivoimassa oleva tai määräaikainen.
        </p>

        <p id="form-smaller-text">
          Palkattavan henkilön ollessa 14 vuotias, sopimuksen tekee huoltaja.
          Sitä nuorempi saa työskennellä vain työnsuojeluviranomaisen
          poikkeusluvalla.
        </p>
      </div>
      <FormNavButtons />
    </div>
  );
};

export default Form5;
