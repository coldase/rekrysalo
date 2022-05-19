import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useFormData } from "../../hooks/useFormData";
import Reminder from "./reminder";
import OikotiePic from "../../assets/pics/oikotie.png";
import DuunitoriPic from "../../assets/pics/duunitori.png";

const Form2 = () => {
  const [formData, setValues] = useFormData();

  return (
    <div className="form-inner-container">
      <div className="form-grp" id="form2-header">
        <p>Suosituimmat työpaikkojen hakukoneet</p>
        <p>
          <a href="https://te-palvelut.fi" target="_blank" rel="noreferrer">
            TE-palvelut
          </a>
          ,{" "}
          <a href="https://duunitori.fi/" target="_blank" rel="noreferrer">
            Duunitori
          </a>
          ,{" "}
          <a href="https://oikotie.fi/" target="_blank" rel="noreferrer">
            Oikotie
          </a>
        </p>
      </div>
      <form>
        <div className="form-grp">
          <label htmlFor="2-1">Yrityksen sijainti</label>
          <input
            onChange={(e) => setValues(e)}
            maxLength={120}
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
              onChange={(e) => {
                setValues(e);
              }}
              type="radio"
              id="2-2-1"
              name="form_2_radio"
              value="1"
              checked={formData.form_2_radio === "1" ? true : false}
            ></input>
            <label htmlFor="2-2-1">Etätyö tai monta sijaintia</label>
          </div>
          <div>
            <input
              onChange={(e) => {
                setValues(e);
              }}
              type="radio"
              id="2-2-1"
              name="form_2_radio"
              value="2"
              checked={formData.form_2_radio === "2" ? true : false}
            ></input>
            <label htmlFor="2-2-2">
              Työpaikalla eri sijainti kuin yrityksellä
            </label>
          </div>
        </div>

        {formData.form_2_radio === "1" && (
          <div className="form-grp">
            <label>Etätyön tiedot tai työpaikan sijainnit</label>

            <textarea
              onChange={(e) => setValues(e)}
              maxLength={200}
              name="form_2_eta_tyo_tai_monta_sijaintia"
              value={
                formData.form_2_eta_tyo_tai_monta_sijaintia
                  ? formData.form_2_eta_tyo_tai_monta_sijaintia
                  : ""
              }
            />
          </div>
        )}
        {formData.form_2_radio === "2" && (
          <div className="form-grp">
            <label htmlFor="2-2-3">Työpaikan sijainti</label>

            <input
              onChange={(e) => setValues(e)}
              maxLength={500}
              id="2-7"
              name="form_2_tyopaikan_sijainti"
              value={
                formData.form_2_tyopaikan_sijainti
                  ? formData.form_2_tyopaikan_sijainti
                  : ""
              }
            />
          </div>
        )}
        <div className="form-grp">
          <label htmlFor="2-6">Yrityksen kuvaus</label>
          <textarea
            onChange={(e) => setValues(e)}
            className="large"
            maxLength={700}
            id="2-6"
            name="form_2_yrityksen_kuvaus"
            value={
              formData.form_2_yrityksen_kuvaus
                ? formData.form_2_yrityksen_kuvaus
                : ""
            }
          />
        </div>
        <hr />

        <div className="form-grp">
          <label htmlFor="2-3">Työsopimuksen tyyppi</label>
          <select
            onChange={(e) => setValues(e)}
            onFocus={() =>
              document.getElementById("valitse").setAttribute("disabled", true)
            }
            name="form_2_tyosopimuksen_tyyppi"
            value={
              formData.form_2_tyosopimuksen_tyyppi
                ? formData.form_2_tyosopimuksen_tyyppi
                : ""
            }
          >
            <option id="valitse" default>
              Valitse
            </option>
            <option value="maaraaikainen">Määräaikainen</option>
            <option value="toistaiseksi-voimassaoleva">
              Toistaiseksi voimassaoleva
            </option>
            <option value="harjoittelija">Harjoittelija</option>
          </select>
        </div>
        <div className="form-grp">
          <label htmlFor="2-4">Työaika</label>
          <select
            onChange={(e) => setValues(e)}
            onFocus={() =>
              document.getElementById("valitse2").setAttribute("disabled", true)
            }
            name="form_2_tyoaika"
            value={formData.form_2_tyoaika ? formData.form_2_tyoaika : ""}
          >
            <option id="valitse2" default>
              Valitse
            </option>
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
            maxLength={200}
            value={
              formData.form_2_tehtavanimike ? formData.form_2_tehtavanimike : ""
            }
          />
        </div>

        <div className="form-grp">
          <label htmlFor="2-7">Työnkuvaus</label>
          <textarea
            onChange={(e) => setValues(e)}
            maxLength={700}
            className="large"
            id="2-7"
            name="form_2_tyon_kuvaus"
            value={
              formData.form_2_tyon_kuvaus ? formData.form_2_tyon_kuvaus : ""
            }
          />
        </div>
        <hr />
        <div className="form-grp">
          <label htmlFor="2-8">Ilmoittajan nimi</label>
          <input
            onChange={(e) => setValues(e)}
            type="text"
            id="2-8"
            maxLength={50}
            name="form_2_ilmoittajan_nimi"
            value={
              formData.form_2_ilmoittajan_nimi
                ? formData.form_2_ilmoittajan_nimi
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
            maxLength={20}
            name="form_2_ilmoittajan_puhelin"
            value={
              formData.form_2_ilmoittajan_puhelin
                ? formData.form_2_ilmoittajan_puhelin
                : ""
            }
          />
        </div>

        <div className="form-grp">
          <label htmlFor="2-9">Hakemusten vastaanotto sähköpostiosoite</label>
          <input
            onChange={(e) => setValues(e)}
            type="text"
            id="2-9"
            maxLength={100}
            name="form_2_hakemusten_vastaanotto_sahkoposti"
            value={
              formData.form_2_hakemusten_vastaanotto_sahkoposti
                ? formData.form_2_hakemusten_vastaanotto_sahkoposti
                : ""
            }
          />
        </div>
        <div className="form-grp">
          <label htmlFor="2-11">Ilmoituksen julkaisuaika</label>
          <div className="form-horizontal-grp">
            <input
              onChange={(e) => setValues(e)}
              type="date"
              id="date1"
              name="form_2_julkaisuaika_from"
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
              id="date2"
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
            className="large"
            maxLength={300}
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
        <hr />
        <div className="form-grp">
          <label>
            Muutaman yleisimmän työnhakusivuston vaatimukset lähetettävän kuvan
            ja videon suhteen.
          </label>
        </div>
        <div className="form-horizontal-grp2">
          <div className="image-info-block">
            <img src={DuunitoriPic} alt="Oikotie" />
          </div>
          <div className="image-info-block">
            <img src={OikotiePic} alt="Oikotie" />
          </div>
        </div>
      </form>
      <FormNavButtons />
      <Reminder />
    </div>
  );
};

export default Form2;
