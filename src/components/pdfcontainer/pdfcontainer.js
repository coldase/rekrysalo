import "./pdfcontainer.css";
import jsPDF from "jspdf";

var lMargin = 15; //left margin in mm
var rMargin = 40; //right margin in mm
var pdfInMM = 210; // width of A4 in mm

/*
Draws text into pdf
  params: document, text, fontweight, fontsize, position-y, is multiline?
*/
const text = (doc, text, weight, fontsize, posy, multi) => {
  let lmg = lMargin;
  if (fontsize === 11) {
    lmg = 21;
  }
  doc.setFont("Helvetica", weight);
  doc.setFontSize(fontsize);

  if (multi) {
    let lines = doc.splitTextToSize(text, pdfInMM - lMargin - rMargin);
    doc.text(lmg, posy, lines);
  } else {
    doc.text(text, lmg, posy);
  }
};

// Formats date yyyy-mm-dd -> dd.mm.yyyy
const formatDate = (d) => {
  const sp = d.split("-");
  return `${sp[2]}.${sp[1]}.${sp[0]}`;
};

const handlePdf = (formdata) => {
  let doc = new jsPDF();

  //Page 1
  text(doc, "Pien- ja mikroyrittäjän rekrytointiopas", "bold", 18, 20, false);
  text(doc, "Vaihe 1 - Osaamisen tarve", "bold", 15, 40, false);
  text(
    doc,
    "1. Millaista osaamista yrityksesi tarvitsee nyt ja tulevaisuudessa",
    "",
    15,
    55,
    false
  );
  text(doc, formdata.form_1_osaaminen, "", 11, 65, true);
  text(doc, "2. Arvioi budjetti rekrytoinnille", "", 15, 110, false);
  doc.setFontSize(11);
  text(doc, formdata.form_1_budjetti, "", 11, 119, true);
  text(
    doc,
    "3. Pohdi yrityksen pitkän ja lyhyen aikavälin tavoitteet",
    "",
    15,
    165,
    false
  );
  text(doc, formdata.form_1_tavoitteet, "", 11, 175, true);

  //Page 2
  doc.addPage();
  text(doc, "4. Aikatauluta rekrytointi", "", 15, 35, false);
  text(doc, formdata.form_1_aikataulutus, "", 11, 45, true);

  //Page 3
  doc.addPage();
  text(doc, "Vaihe 2 - Työpaikkailmoitus", "bold", 15, 20, false);
  text(doc, "1. Yrityksen sijainti", "", 15, 35, false);
  text(doc, formdata.form_2_yrityksen_sijainti, "", 11, 45, false);
  if (formdata.form_2_radio === "1") {
    text(doc, formdata.form_2_eta_tyo_tai_monta_sijaintia, "", 11, 50, true);
  }
  if (formdata.form_2_radio === "2") {
    text(doc, formdata.form_2_tyopaikan_sijainti, "", 11, 50, true);
  }
  text(doc, "2. Työsopimuksen tyyppi", "", 15, 70, false);
  text(
    doc,
    `${
      formdata.form_2_tyosopimuksen_tyyppi !== "Valitse"
        ? formdata.form_2_tyosopimuksen_tyyppi === "maaraaikainen"
          ? "Määräaikainen"
          : formdata.form_2_tyosopimuksen_tyyppi ===
            "toistaiseksi-voimassaoleva"
          ? "Toistaiseksi voimassaoleva"
          : formdata.form_2_tyosopimuksen_tyyppi === "harjoittelija"
          ? "Harjoittelija"
          : ""
        : ""
    }`,
    "",
    11,
    80,
    false
  );
  text(doc, "3. Työaika", "", 15, 90, false);
  text(
    doc,
    `${
      formdata.form_2_tyoaika !== "Valitse"
        ? formdata.form_2_tyoaika === "osa-aikainen"
          ? "Osa-aikainen"
          : formdata.form_2_tyoaika === "kokoaikainen"
          ? "Kokoaikainen"
          : ""
        : ""
    }`,
    "",
    11,
    100,
    false
  );
  text(doc, "4. Tehtävänimike", "", 15, 110, false);
  text(doc, formdata.form_2_tehtavanimike, "", 11, 120, false);
  text(doc, "5. Yrityksen kuvaus", "", 15, 130, false);
  text(doc, formdata.form_2_yrityksen_kuvaus, "", 11, 140, true);
  text(doc, "6. Työn kuvaus", "", 15, 185, false);
  text(doc, formdata.form_2_tyon_kuvaus, "", 11, 195, true);

  //Page 3
  doc.addPage();
  text(doc, "7. Ilmoittajan nimi", "", 15, 35, false);
  text(doc, formdata.form_2_ilmoittajan_nimi, "", 11, 45, false);
  text(doc, "8. Ilmoittajan puhelinnumero", "", 15, 55, false);
  text(doc, formdata.form_2_ilmoittajan_puhelin, "", 11, 65, false);
  text(doc, "9. Hakemusten vastaanotto sähköposti", "", 15, 75, false);
  text(
    doc,
    formdata.form_2_hakemusten_vastaanotto_sahkoposti,
    "",
    11,
    85,
    false
  );
  text(doc, "10. Julkaisuaika", "", 15, 95, false);
  if (formdata.form_2_julkaisuaika_from && formdata.form_2_julkaisuaika_to) {
    text(
      doc,
      `${formatDate(formdata.form_2_julkaisuaika_from)} - ${formatDate(
        formdata.form_2_julkaisuaika_to
      )}`,
      "",
      11,
      105,
      false
    );
  } else {
    text(doc, "", "", 11, 105, false);
  }

  text(doc, "11. Yhteyshenkilöt ja heidän yhteystietonsa", "", 15, 115, false);
  text(
    doc,
    formdata.form_2_yhteyshenkilot_ja_heidan_yhteystiedot,
    "",
    11,
    125,
    true
  );
  text(
    doc,
    "Muista, kuvalliset ilmoitukset saavat enemmän huomiota",
    "bold",
    15,
    165,
    false
  );

  //Page 4
  doc.addPage();
  text(doc, "Vaihe 3 - Hakemusten käsittely", "bold", 15, 20, false);
  text(doc, "1. Milloin olet tavoitettavissa", "", 15, 35, false);
  text(doc, formdata.form_3_milloin_tavoitettavissa, "", 11, 45, false);
  text(doc, "2. Milloin vastaat hakijoille", "", 15, 55, false);
  text(doc, formdata.form_3_milloin_vastaat, "", 11, 65, false);
  text(doc, "3. Luonnostele kutsu haastatteluun", "", 15, 75, false);
  text(doc, formdata.form_3_kutsu_haastatteluun, "", 11, 85, true);
  text(
    doc,
    "4. Luonnostele vastaus hylätyille hakemuksille",
    "",
    15,
    120,
    false
  );
  text(doc, formdata.form_3_vastaus_hylatyille_hakemuksille, "", 11, 130, true);

  //Page 5
  doc.addPage();
  text(doc, "Vaihe 4 - Haastattelu", "bold", 15, 20, false);
  text(doc, "1. Haastattelutyyppi", "", 15, 30, false);
  text(
    doc,
    `${
      formdata.form_4_haastettelutyyppi !== "Valitse"
        ? formdata.form_4_haastettelutyyppi === "yksilohaastattelu"
          ? "Yksilöhaastattelu"
          : formdata.form_4_haastettelutyyppi === "ryhmahaastattelu"
          ? "Ryhmähaastattelu"
          : formdata.form_4_haastettelutyyppi === "etahaastattelu"
          ? "Etähaastattelu"
          : ""
        : ""
    }`,
    "",
    11,
    40,
    false
  );

  text(doc, "2. Suunnittele haastattelurunko", "", 15, 50, false);
  text(doc, formdata.form_4_haastattelurunko, "", 11, 60, true);
  text(
    doc,
    "Varaa tarpeeksi aikaa perehdytystä varten",
    "bold",
    15,
    165,
    false
  );

  //Page 6
  doc.addPage();
  text(doc, "Muistilista", "bold", 15, 20, false);
  text(doc, "1. Osaamisen tarve", "", 15, 35, false);

  let st1 = "";
  if (formdata.form_1_1) {
    st1 +=
      "Tekijän löytäminen on helpompaa kun tiedät mitä tarvitset. Virherekrytointi on suurin vältettävissä oleva menoerä. ";
  }
  if (formdata.form_1_2) {
    st1 +=
      "Varaa rekrytointiin tarpeeksi aikaa. Pidä aikataulusta kiinni. Yleensä pienyrittäjän rekrytointiin kuluu aikaa n. kuukausi, josta työaikaa on n. 2-5 kokonaista työpäivää. ";
  }
  if (formdata.form_1_3) {
    st1 +=
      "Vastavalmistunut tai vastaava on aluksi halvempi palkattava, tosin perehdytys vie alkuun siivun tuottavuudesta. Kokenut osaaja taas voi tuoda yritykselle nopeammin suurempia tuloja, mutta on kalliimpi palkattava. ";
  }
  text(doc, st1, "", 11, 45, true);
  text(doc, "2. Työpaikkailmoitus", "", 15, 80, false);

  let st2 = "";
  if (formdata.form_2_1) {
    st2 +=
      "Olethan muistanut jakaa ilmoitustasi myös sosiaalisessa mediassa, Facebook, Instagram, Twitter jne. ";
  }
  if (formdata.form_2_2) {
    st2 +=
      "Esittele yrityksesi toimintaa lyhyesti. Tiivistä asiat jotka saattavat kiinnostaa hakijoitasi. Kerro mitä yrityksesi tarjoaa hakijalle. Älä jaarittele, yritä pitää tekstilohkot lyhyinä. ";
  }
  if (formdata.form_2_3) {
    st2 += "Anna tehtävänimikkeeksi mahdollisimman selkeä ja kuvaava nimi. ";
  }
  if (formdata.form_2_4) {
    st2 +=
      "Anna mahdollisimman selkeä kuvaus työn sisällöstä. Älä jaarittele, yritä pitää tekstilohkot lyhyinä. ";
  }
  if (formdata.form_2_5) {
    st2 +=
      "Kuvalliset ilmoitukset saavat enemmän huomiota. Valitse sellainen kuva joka vahvistaa yrityskuvaasi. Videon tekeminen kannattaa, jos sinulla on siihen resursseja. ";
  }
  text(doc, st2, "", 11, 90, true);

  text(doc, "3. Hakemusten käsittely", "", 15, 130, false);

  let st3 = "";
  if (formdata.form_3_1) {
    st3 += "Yrityskuvan kannalta on hyvä vastata kaikille hakijoille. ";
  }
  if (formdata.form_3_2) {
    st3 +=
      "Yrityskuvan kannalta on kannattavaa luoda hyvä hakijakokemus. Vastaa kaikille hakijoille mahdollisimmnan nopeasti, ole täsmällinen, arvosta hakemuksia ja ole kohtelias. ";
  }
  text(doc, st3, "", 11, 140, true);

  text(doc, "4. Haastattelu", "", 15, 163, false);

  let st4 = "";
  if (formdata.form_4_1) {
    st4 +=
      "Päätä tärkeimmät kysymykset, jotka tulee kysyttyä jokaiselta, vaikka itse haastattelut kulkisivat eri tavoilla. ";
  }
  text(doc, st4, "", 11, 173, true);

  text(doc, "5. Sopimus", "", 15, 193, false);

  let st5 = "";
  if (formdata.form_5_1) {
    st5 +=
      "Sopimuspohjana voit käyttää vaikka työsuojelu.fi -palvelusta löytyvää pohjaa. ";
  }
  text(doc, st5, "", 11, 203, true);

  text(doc, "6. Perehdytys", "", 15, 220, false);

  let st6 = "";
  if (formdata.form_6_1) {
    st6 +=
      "Lisää tietoa työturvallisuuslaista osoittessa www.tyoturvallisuus.eu. ";
  }
  if (formdata.form_6_2) {
    st6 +=
      "Perehdytyskansio on infopaketti yrityksesi uudelle työntekijälle. Perehdytyskansion pohjan löydät osoitteesta www.perehdytysopas.fi. ";
  }
  text(doc, st6, "", 11, 230, true);

  doc.save("test.pdf");
};
export { handlePdf };
