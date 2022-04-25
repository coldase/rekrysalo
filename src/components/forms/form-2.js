import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useFormData } from "../../hooks/useFormData";

const Form2 = () => {
  const [formData, setValues] = useFormData();

  return (
    <div className="form-inner-container">
      <form>
        <div className="form-grp">
          <label htmlFor="2-0">Yrityksen nimi</label>
          <input
            onChange={(e) => setValues(e)}
            type="text"
            id="2-0"
            name="form_2_yrityksen_nimi"
            value={
              formData.form_2_yrityksen_nimi
                ? formData.form_2_yrityksen_nimi
                : ""
            }
          />
        </div>
        <div className="form-grp">
          <label htmlFor="2-0-0">Y-tunnus</label>
          <input
            onChange={(e) => setValues(e)}
            type="text"
            id="2-0-0"
            name="form_2_ytunnus"
            value={formData.form_2_ytunnus ? formData.form_2_ytunnus : ""}
          />
        </div>
        <div className="form-grp">
          <label htmlFor="2-1">Yrityksen sijainti</label>
          <input
            onChange={(e) => setValues(e)}
            type="text"
            id="2-1"
            name="form_2_yrityksen_sijainti"
            value={
              formData.form_2_yrityksen_sijainti
                ? formData.form_2_yrityksen_sijainti
                : ""
            }
          />
        </div>
        <div className="form-check-grp">
          <div>
            <input
              onChange={(e) => setValues(e, "check")}
              type="checkbox"
              id="2-2-1"
              name="form_2_etatyo_tai_monta_sijaintia"
              checked={
                formData.form_2_etatyo_tai_monta_sijaintia
                  ? formData.form_2_etatyo_tai_monta_sijaintia
                  : ""
              }
            ></input>
            <label htmlFor="2-2-1">Etätyö tai monta sijaintia</label>
          </div>
          <div>
            <input
              onChange={(e) => setValues(e, "check")}
              type="checkbox"
              id="2-2-2"
              name="form_2_tyopaikalla_eri_sijainti"
              checked={
                formData.form_2_tyopaikalla_eri_sijainti
                  ? formData.form_2_tyopaikalla_eri_sijainti
                  : ""
              }
            ></input>
            <label htmlFor="2-2-2">Työpaikalla eri sijainti</label>
          </div>
        </div>
        <div className="form-grp">
          <label htmlFor="2-3">Työsopimuksen tyyppi</label>
          <select
            onChange={(e) => setValues(e)}
            name="form_2_tyosopimuksen_tyyppi"
            value={
              formData.form_2_tyosopimuksen_tyyppi
                ? formData.form_2_tyosopimuksen_tyyppi
                : ""
            }
          >
            <option disabled>Valitse</option>
            <option value="maaraaikainen">Määräaikainen</option>
            <option value="vakituinen">Vakituinen</option>
            <option value="harjoittelija">Harjoittelija</option>
          </select>
        </div>
        <div className="form-grp">
          <label htmlFor="2-4">Työaika</label>
          <select
            onChange={(e) => setValues(e)}
            name="form_2_tyoaika"
            value={formData.form_2_tyoaika ? formData.form_2_tyoaika : ""}
          >
            <option disabled>Valitse</option>
            <option value="osa-aikainen">Osa-aikainen</option>
            <option value="kokoaikainen">Kokoaikainen</option>
          </select>
        </div>
        <div className="form-grp">
          <label htmlFor="2-5">Tehtävänimike</label>
          <input
            onChange={(e) => setValues(e)}
            type="text"
            id="2-5"
            name="form_2_tehtavanimike"
            value={
              formData.form_2_tehtavanimike ? formData.form_2_tehtavanimike : ""
            }
          />
        </div>
        <div className="form-grp">
          <label htmlFor="2-6">Yrityksen kuvaus</label>
          <textarea
            onChange={(e) => setValues(e)}
            className="large"
            id="2-6"
            name="form_2_yrityksen_kuvaus"
            value={
              formData.form_2_yrityksen_kuvaus
                ? formData.form_2_yrityksen_kuvaus
                : ""
            }
          />
        </div>
        <div className="form-grp">
          <label htmlFor="2-7">Työn kuvaus</label>
          <textarea
            onChange={(e) => setValues(e)}
            id="2-7"
            name="form_2_tyon_kuvaus"
            value={
              formData.form_2_tyon_kuvaus ? formData.form_2_tyon_kuvaus : ""
            }
          />
        </div>
        <div className="form-grp">
          <label htmlFor="2-8">Ilmoittajan nimi</label>
          <input
            onChange={(e) => setValues(e)}
            type="text"
            id="2-8"
            name="form_2_ilmoittajan_nimi"
            value={
              formData.form_2_ilmoittajan_nimi
                ? formData.form_2_ilmoittajan_nimi
                : ""
            }
          />
        </div>
        <div className="form-grp">
          <label htmlFor="2-9">Hakemusten vastaanotto sähköposti</label>
          <input
            onChange={(e) => setValues(e)}
            type="text"
            id="2-9"
            name="form_2_hakemusten_vastaanotto_sahkoposti"
            value={
              formData.form_2_hakemusten_vastaanotto_sahkoposti
                ? formData.form_2_hakemusten_vastaanotto_sahkoposti
                : ""
            }
          />
        </div>
        <div className="form-grp">
          <label htmlFor="2-10">Ilmoittajan puhelin</label>
          <input
            onChange={(e) => setValues(e)}
            type="text"
            id="2-10"
            name="form_2_ilmoittajan_puhelin"
            value={
              formData.form_2_ilmoittajan_puhelin
                ? formData.form_2_ilmoittajan_puhelin
                : ""
            }
          />
        </div>

        <div className="form-grp">
          <label htmlFor="2-11">Julkaisuaika</label>
          <div className="form-horizontal-grp">
            <input
              onChange={(e) => setValues(e)}
              type="date"
              id="2-11-1"
              name="form_2_julkaisuaika_from"
              // placeholder="aa/DD/YYYY"
              value={
                formData.form_2_julkaisuaika_from
                  ? formData.form_2_julkaisuaika_from
                  : ""
              }
            />
            <HiOutlineArrowNarrowRight className="arrow-icon" />
            <input
              onChange={(e) => setValues(e)}
              type="date"
              id="2-11-2"
              name="form_2_julkaisuaika_to"
              value={
                formData.form_2_julkaisuaika_to
                  ? formData.form_2_julkaisuaika_to
                  : ""
              }
            />
          </div>
        </div>

        <div className="form-grp">
          <label htmlFor="2-12">Yhteyshenkilöt ja heidän yhteystiedot</label>
          <textarea
            onChange={(e) => setValues(e)}
            id="2-12"
            name="form_2_yhteyshenkilot_ja_heidan_yhteystiedot"
            value={
              formData.form_2_yhteyshenkilot_ja_heidan_yhteystiedot
                ? formData.form_2_yhteyshenkilot_ja_heidan_yhteystiedot
                : ""
            }
          />
        </div>
      </form>
      <FormNavButtons />
    </div>
  );
};

export default Form2;
