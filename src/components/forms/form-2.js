import "./form.css";
import FormNavButtons from "../form-nav-buttons/form-nav-buttons";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useFormData } from "../../hooks/useFormData";
import { useState } from "react";
import Reminder from "./reminder";

const Form2 = () => {
  const [formData, setValues] = useFormData();
  const [chooseRadio, setChooseRadio] = useState(null);

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
              onChange={() => setChooseRadio("1")}
              type="radio"
              id="2-2-1"
              name="form_2_radio"
            ></input>
            <label htmlFor="2-2-1">Etätyö tai monta sijaintia</label>
          </div>
          <div>
            <input
              onChange={() => setChooseRadio("2")}
              type="radio"
              id="2-2-2"
              name="form_2_radio"
            ></input>
            <label htmlFor="2-2-2">
              Työpaikalla eri sijainti kuin yrityksellä
            </label>
          </div>
        </div>

        {chooseRadio === "1" && (
          <div className="form-grp">
            <label>Etätyön tiedot tai työpaikan sijainnit</label>

            <textarea
              onChange={(e) => setValues(e)}
              maxLength={500}
              name="form_2_eta_tyo_tai_tyopaikan_sijainti"
            />
          </div>
        )}
        {chooseRadio === "2" && (
          <div className="form-grp">
            <label htmlFor="2-2-3">Työpaikan sijainti</label>

            <input
              onChange={(e) => setValues(e)}
              maxLength={500}
              id="2-7"
              name="form_2_tyopaikan_sijainti"
            />
          </div>
        )}

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
            <option default>Valitse</option>
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
            <option default>Valitse</option>
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
          <label htmlFor="2-6">Yrityksen kuvaus</label>
          <textarea
            onChange={(e) => setValues(e)}
            className="large"
            maxLength={500}
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
            maxLength={500}
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
      </form>
      <FormNavButtons />
      <Reminder />
    </div>
  );
};

export default Form2;
