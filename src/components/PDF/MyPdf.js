import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import PDFbg from "../../assets/pics/pdfbg.png";

const styles = StyleSheet.create({
  content: {
    // backgroundColor: "red",
    margin: "100px 50px 0 50px",
  },
  img: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  pageTitleText: {
    color: "rgb(112, 112, 112)",
    fontSize: 18,
    marginBottom: 10,
  },
  contentTitleText: {
    color: "rgb(112, 112, 112)",
    marginLeft: 20,
    marginTop: 12,
    fontSize: 15,
  },
  contentText: {
    color: "rgb(112, 112, 112)",
    marginLeft: 40,
    marginTop: 5,
    fontSize: 13,
  },
  innerContentText: {
    color: "rgb(112, 112, 112)",
    marginLeft: 60,
    marginTop: 5,
    fontSize: 10,
  },
  dashText: {
    color: "rgb(112, 112, 112)",
    marginLeft: 30,
    marginTop: 5,
    fontSize: 15,
  },
});

const MyPdf = ({ formData }) => {
  return (
    <Document>
      <Page>
        <Image src={PDFbg} alt={"bgimage"} style={styles.img}></Image>
        <View style={styles.content}>
          <Text style={styles.pageTitleText}>1. Osaamisen tarve</Text>
          <Text style={styles.contentTitleText}>
            Millaista osaamista yrityksesi tarvitsee nyt ja tulevaisuudessa
          </Text>
          <Text style={styles.contentText}>
            {formData.form_1_osaaminen ? formData.form_1_osaaminen : ""}
          </Text>
          <Text style={styles.contentTitleText}>Budjetti rekrytoinnille</Text>
          <Text style={styles.contentText}>
            {formData.form_1_budjetti ? formData.form_1_budjetti : ""}
          </Text>
          <Text style={styles.contentTitleText}>Yrityksen tavoitteet</Text>
          <Text style={styles.contentText}>
            {formData.form_1_tavoitteet ? formData.form_1_tavoitteet : ""}
          </Text>
          <Text style={styles.contentText}>
            {formData.form_1_esimerkki_a ? "Uusi asiakashankinta." : ""}
          </Text>
          <Text style={styles.contentText}>
            {formData.form_1_esimerkki_b
              ? "Nyt on joulusesonki, tarvitsemme jouluapulaista."
              : ""}
          </Text>
          <Text style={styles.contentText}>
            {formData.form_1_esimerkki_b ? "Tuotantomme on kasvussa." : ""}
          </Text>
          <Text style={styles.contentTitleText}>Aikatauluta rekrytointi</Text>
          <Text style={styles.contentText}>
            {formData.form_1_aikataulutus ? formData.form_1_aikataulutus : ""}
          </Text>
        </View>
      </Page>
      <Page>
        <Image src={PDFbg} alt={"bgimage"} style={styles.img}></Image>
        <View style={styles.content}>
          <Text style={styles.pageTitleText}>2. Työpaikkailmoitus</Text>
          <Text style={styles.contentTitleText}>Yrityksen nimi</Text>
          <Text style={styles.contentText}>
            {formData.form_2_yrityksen_nimi
              ? formData.form_2_yrityksen_nimi
              : ""}
          </Text>
          <Text style={styles.contentTitleText}>Yrityksen sijainti</Text>
          <Text style={styles.contentText}>
            {formData.form_2_yrityksen_sijainti
              ? formData.form_2_yrityksen_sijainti
              : ""}
          </Text>
          <Text style={styles.innerContentText}>
            {formData.form_2_tyopaikalla_eri_sijainti
              ? "- Työpaikalla eri sijanti"
              : ""}
          </Text>
          <Text style={styles.innerContentText}>
            {formData.form_2_etatyo_tai_monta_sijaintia
              ? "- Etätyö tai monta sijaintia"
              : ""}
          </Text>
          <Text style={styles.contentTitleText}>Työsopimuksen tyyppi</Text>
          <Text style={styles.contentText}>
            {formData.form_2_tyosopimuksen_tyyppi !== "Valitse"
              ? formData.form_2_tyosopimuksen_tyyppi
              : ""}
          </Text>
          <Text style={styles.contentTitleText}>Työaika</Text>
          <Text style={styles.contentText}>
            {formData.form_2_tyoaika !== "Valitse"
              ? formData.form_2_tyoaika
              : ""}
          </Text>
          <Text style={styles.contentTitleText}>Tehtävänimike</Text>
          <Text style={styles.contentText}>
            {formData.form_2_tehtavanimike ? formData.form_2_tehtavanimike : ""}
          </Text>
          <Text style={styles.contentTitleText}>Yrityksen kuvaus</Text>
          <Text style={styles.contentText}>
            {formData.form_2_yrityksen_kuvaus
              ? formData.form_2_yrityksen_kuvaus
              : ""}
          </Text>
          <Text style={styles.contentTitleText}>Työn kuvaus</Text>
          <Text style={styles.contentText}>
            {formData.form_2_tyon_kuvaus ? formData.form_2_tyon_kuvaus : ""}
          </Text>
          <Text style={styles.contentTitleText}>Ilmoittajan yhteystiedot</Text>
          {formData.form_2_ilmoittajan_nimi ? (
            <Text style={styles.contentText}>
              {formData.form_2_ilmoittajan_nimi}
            </Text>
          ) : null}
          {formData.form_2_ilmoittajan_puhelin ? (
            <Text style={styles.contentText}>
              {formData.form_2_ilmoittajan_puhelin}
            </Text>
          ) : null}
          <Text style={styles.contentTitleText}>
            Hakemusten vastaanotto sähköposti
          </Text>
          <Text style={styles.contentText}>
            {formData.form_2_hakemusten_vastaanotto_sahkoposti
              ? formData.form_2_hakemusten_vastaanotto_sahkoposti
              : ""}
          </Text>
          <Text style={styles.contentTitleText}>Julkaisuaika</Text>
          <Text style={styles.contentText}>
            {formData.form_2_julkaisuaika_from &&
            formData.form_2_julkaisuaika_to
              ? formData.form_2_julkaisuaika_from +
                " - " +
                formData.form_2_julkaisuaika_to
              : ""}
          </Text>

          <Text style={styles.contentTitleText}>
            Yhteyshenkilöt ja heidän yhteystiedot
          </Text>
          <Text style={styles.contentText}>
            {formData.form_2_yhteyshenkilot_ja_heidan_yhteystiedot
              ? formData.form_2_yhteyshenkilot_ja_heidan_yhteystiedot
              : ""}
          </Text>
        </View>
      </Page>
      <Page>
        <Image src={PDFbg} alt={"bgimage"} style={styles.img}></Image>
        <View style={styles.content}>
          <Text style={styles.pageTitleText}>3. Hakemusten käsittely</Text>
          <Text style={styles.contentTitleText}>
            Milloin olet tavoitettavissa
          </Text>
          <Text style={styles.contentText}>
            {formData.form_3_milloin_tavoitettavissa
              ? formData.form_3_milloin_tavoitettavissa
              : ""}
          </Text>
          <Text style={styles.contentTitleText}>
            Milloin vastaat hakijoille
          </Text>
          <Text style={styles.contentText}>
            {formData.form_3_milloin_vastaat
              ? formData.form_3_milloin_vastaat
              : ""}
          </Text>
          <Text style={styles.contentTitleText}>Haastettelukutsu luonnos</Text>
          <Text style={styles.contentText}>
            {formData.form_3_kutsu_haastatteluun
              ? formData.form_3_kutsu_haastatteluun
              : ""}
          </Text>
          <Text style={styles.contentTitleText}>
            Vastaus hylätyille hakemuksille
          </Text>
          <Text style={styles.contentText}>
            {formData.form_3_vastaus_hylatyille_hakemuksille
              ? formData.form_3_vastaus_hylatyille_hakemuksille
              : ""}
          </Text>
          {formData.form_3_esimerkki_a ? (
            <Text style={styles.contentText}>
              Kiitos kiinnostuksestasi työpaikkaa kohtaan, valitettavasti
              valinta ei juuri nyt osunut kohdallesi.
            </Text>
          ) : null}
          {formData.form_3_esimerkki_b ? (
            <Text style={styles.contentText}>
              Hei "Hakijana nimi". Valintakriteerimme eivät tälläkertaa
              täyttyneet kohdallasi, sillä "Kerro syy".,
            </Text>
          ) : null}
        </View>
      </Page>
      <Page>
        <Image src={PDFbg} alt={"bgimage"} style={styles.img}></Image>
        <View style={styles.content}>
          <Text style={styles.pageTitleText}>4. Haastattelu ja perehdytys</Text>
          <Text style={styles.contentTitleText}>Haastettelutyyppi</Text>
          <Text style={styles.contentText}>
            {formData.form_4_haastettelutyyppi !== "Valitse"
              ? formData.form_4_haastettelutyyppi
              : ""}
          </Text>
          <Text style={styles.contentTitleText}>Haastettelurunko</Text>
          <Text style={styles.contentText}>
            {formData.form_4_haastattelurunko
              ? formData.form_4_haastattelurunko
              : ""}
          </Text>
          <Text style={styles.contentTitleText}>Perehdytys aika</Text>
          <Text style={styles.contentText}>
            {formData.form_6_perehdytysaika_from &&
            formData.form_6_perehdytysaika_to
              ? formData.form_6_perehdytysaika_from +
                " - " +
                formData.form_6_perehdytysaika_to
              : ""}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyPdf;
