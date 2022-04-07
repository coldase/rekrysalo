import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
const Form1 = () => {
  return (
    <div className="form-inner-container">
      <form>
        <div className="form-grp">
          <label htmlFor="1-1">
            Mieti millaista osaamista yrityksesi tarvitsee nyt ja
            tulevaisuudessa:
          </label>
          <input type="text" id="1-1" name="1-1" />
        </div>
        <div className="form-grp">
          <label htmlFor="1-2">Arvioi budjetti rekrytoinnille:</label>
          <textarea id="1-2" name="1-2" />
        </div>
        <div className="form-grp">
          <label htmlFor="1-3">
            Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet
          </label>
          <textarea type="text" id="1-3" name="1-3" />
        </div>
        <div className="form-check-grp">
          <div>
            <input type="checkbox" id="1-4-1" name="1-4-1"></input>
            <label htmlFor="1-4-1">Esimerkki A</label>
          </div>
          <div>
            <input type="checkbox" id="1-4-2" name="1-4-2"></input>
            <label htmlFor="1-4-2">Esimerkki B</label>
          </div>
          <div>
            <input type="checkbox" id="1-4-3" name="1-4-3"></input>
            <label htmlFor="1-4-3">Esimerkki C</label>
          </div>
        </div>
        <div className="form-check-grp-text">
          <p>
            A. Koska yrityksemme tarvitsee uusia asiakkaita, yksi ensivuoden
            päätavoitteista on uusi asiakashankinta.
          </p>
          <p>B. Koska nyt on joulusesonki, tarvitsemme jouluapulaista.</p>
          <p>C. Tuotantomme on kasvussa.</p>
        </div>
        <div className="form-grp">
          <label htmlFor="1-5">Aikatauluta rekrytointi</label>
          <textarea type="text" id="1-5" name="1-5" />
        </div>
      </form>
      <FormNavButtons />
    </div>
  );
};

export default Form1;
