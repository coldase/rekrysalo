import { formatDate } from "../helpers/formatTime";

const defaultFormData = {
  form_started: false,
  form_1_osaaminen: "",
  form_1_tavoitteet: "",
  form_1_aikataulutus: "",
  form_1_budjetti: "",

  form_2_yrityksen_sijainti: "",

  form_2_radio: "",
  form_2_eta_tyo_tai_monta_sijaintia: "",
  form_2_tyopaikan_sijainti: "",
  form_2_yrityksen_kuvaus: "",
  form_2_tyosopimuksen_tyyppi: "Valitse",
  form_2_tyoaika: "Valitse",
  form_2_tehtavanimike: "",
  form_2_tyon_kuvaus: "",
  form_2_ilmoittajan_nimi: "",
  form_2_ilmoittajan_puhelin: "",
  form_2_hakemusten_vastaanotto_sahkoposti: "",
  form_2_julkaisuaika_from: formatDate(),
  form_2_julkaisuaika_to: formatDate("1"),
  form_2_yhteyshenkilot_ja_heidan_yhteystiedot: "",

  form_3_milloin_tavoitettavissa: "",
  form_3_milloin_vastaat: "",
  form_3_kutsu_haastatteluun: "",
  form_3_vastaus_hylatyille_hakemuksille: "",

  form_4_haastettelutyyppi: "Valitse",
  form_4_haastattelurunko: "",
  form_4_showEsimerkit: false,
};

export { defaultFormData };
