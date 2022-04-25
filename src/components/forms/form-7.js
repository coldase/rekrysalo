import "./form.css";
import "./pdf.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
import { jsPDF } from "jspdf";
import { useFormData } from "../../hooks/useFormData";

const Form7 = () => {
  const [formData] = useFormData();

  const handlePrintPdf = () => {
    let doc = new jsPDF("portrait", "pt", "A4");
    doc.html(document.getElementById("mypdf"), {
      callback: () => {
        doc.save(
          `${
            formData.form_2_yrityksen_nimi
              ? formData.form_2_yrityksen_nimi
              : "default"
          }_hakemus.pdf`
        );
      },
    });
  };
  return (
    <div className="form-inner-container">
      <div className="pdf-container" id="mypdf">
        <div className="pdf-content">
          <div className="pdf-grp">
            <h6>1. Työnantaja</h6>
            <p>{formData.form_2_yrityksen_nimi}</p>
            <p>{formData.form_2_yrityksen_sijainti}</p>
            <p>
              {formData.form_2_etatyo_tai_monta_sijaintia &&
                "Etätyö tai sijainti monella paikkakunnalla"}
            </p>
            <p>{formData.form_2_ytunnus}</p>
            <p>Työnanjan viite?</p>
          </div>

          <div className="pdf-grp">
            <h6>2. Työaika</h6>
            <p>
              {formData.form_2_tyosopimuksen_tyyppi &&
                formData.form_2_tyosopimuksen_tyyppi}
            </p>
            <p>{formData.form_2_tyoaika && formData.form_2_tyoaika}</p>
            <p>Työsopimuksen kesto?</p>
          </div>

          <div className="pdf-grp">
            <h6>3. Työtehtävät</h6>
            <p>{formData.form_2_tehtavanimike}</p>
            <p>Tehtävä alue?</p>
            <p>{formData.form_2_tyon_kuvaus}</p>
            <p>Palkka?</p>
          </div>

          <div className="pdf-grp">
            <h6>4. Hakeminen</h6>
            <p>{formData.form_2_ilmoittajan_nimi}</p>
            <p>{formData.form_2_ilmoittajan_puhelin}</p>
            <p>{formData.form_2_hakemusten_vastaanotto_sahkoposti}</p>
            <p>
              {formData.form_2_julkaisuaika_from} -{" "}
              {formData.form_2_julkaisuaika_to}
            </p>
            <p>{formData.form_2_yhteyshenkilot_ja_heidan_yhteystiedot}</p>
          </div>
        </div>
      </div>
      <FormNavButtons handlePrintPdf={handlePrintPdf} />
    </div>
  );
};

export default Form7;
