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
    fontSize: 13,
    marginBottom: 12,
  },
  contentTitleText: {
    color: "rgb(112, 112, 112)",
    marginLeft: 20,
    marginTop: 12,
    fontSize: 11,
  },
  contentText: {
    maxHeight: 150,
    color: "rgb(112, 112, 112)",
    marginLeft: 40,
    marginTop: 5,
    fontSize: 10,
  },
  innerContentText: {
    color: "rgb(112, 112, 112)",
    marginLeft: 60,
    marginTop: 5,
    fontSize: 8,
  },
});

const MyPdf = ({ formData }) => {
  return (
    <Document>
      {/* PAGE 1 */}
      <Page>
        <Image src={PDFbg} alt={"bgimage"} style={styles.img}></Image>
        <View style={styles.content}>
          <Text style={styles.pageTitleText}>1. Osaamisen tarve</Text>
          {formData.form_1_osaaminen ? (
            <Text style={styles.contentTitleText}>
              Millaista osaamista yrityksesi tarvitsee nyt ja tulevaisuudessa
            </Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_1_osaaminen ? formData.form_1_osaaminen : ""}
          </Text>
          {formData.form_1_budjetti ? (
            <Text style={styles.contentTitleText}>Budjetti rekrytoinnille</Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_1_budjetti ? formData.form_1_budjetti : ""}
          </Text>
          {formData.form_1_tavoitteet ? (
            <Text style={styles.contentTitleText}>Yrityksen tavoitteet</Text>
          ) : null}
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
          {formData.form_1_aikataulutus ? (
            <Text style={styles.contentTitleText}>Aikatauluta rekrytointi</Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_1_aikataulutus ? formData.form_1_aikataulutus : ""}
          </Text>
        </View>
      </Page>

      {/* PAGE 2 */}
      <Page>
        <Image src={PDFbg} alt={"bgimage"} style={styles.img}></Image>
        <View style={styles.content}>
          <Text style={styles.pageTitleText}>2. Työpaikkailmoitus</Text>
          {formData.form_2_yrityksen_nimi ? (
            <Text style={styles.contentTitleText}>Yrityksen nimi</Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_2_yrityksen_nimi
              ? formData.form_2_yrityksen_nimi
              : ""}
          </Text>
          {formData.form_2_yrityksen_sijainti ||
          formData.form_2_tyopaikalla_eri_sijainti ||
          formData.form_2_etatyo_tai_monta_sijaintia ? (
            <Text style={styles.contentTitleText}>Yrityksen sijainti</Text>
          ) : null}
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
          {formData.form_2_tyosopimuksen_tyyppi !== "Valitse" ? (
            <Text style={styles.contentTitleText}>Työsopimuksen tyyppi</Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_2_tyosopimuksen_tyyppi !== "Valitse"
              ? formData.form_2_tyosopimuksen_tyyppi
              : ""}
          </Text>
          {formData.form_2_tyoaika !== "Valitse" ? (
            <Text style={styles.contentTitleText}>Työaika</Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_2_tyoaika !== "Valitse"
              ? formData.form_2_tyoaika
              : ""}
          </Text>
          {formData.form_2_tehtavanimike ? (
            <Text style={styles.contentTitleText}>Tehtävänimike</Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_2_tehtavanimike ? formData.form_2_tehtavanimike : ""}
          </Text>
          {formData.form_2_yrityksen_kuvaus ? (
            <Text style={styles.contentTitleText}>Yrityksen kuvaus</Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_2_yrityksen_kuvaus
              ? formData.form_2_yrityksen_kuvaus
              : ""}
          </Text>
          {formData.form_2_tyon_kuvaus ? (
            <Text style={styles.contentTitleText}>Työn kuvaus</Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_2_tyon_kuvaus ? formData.form_2_tyon_kuvaus : ""}
          </Text>
          {formData.form_2_ilmoittajan_nimi ||
          formData.form_2_ilmoittajan_puhelin ? (
            <Text style={styles.contentTitleText}>
              Ilmoittajan yhteystiedot
            </Text>
          ) : null}
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

          {formData.form_2_julkaisuaika_from &&
          formData.form_2_julkaisuaika_to ? (
            <Text style={styles.contentTitleText}>Julkaisuaika</Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_2_julkaisuaika_from &&
            formData.form_2_julkaisuaika_to
              ? formData.form_2_julkaisuaika_from +
                " - " +
                formData.form_2_julkaisuaika_to
              : ""}
          </Text>
        </View>
      </Page>

      {/* PAGE 3 */}
      <Page>
        <Image src={PDFbg} alt={"bgimage"} style={styles.img}></Image>
        <View style={styles.content}>
          <Text style={styles.pageTitleText}>3. Hakemusten käsittely</Text>
          {formData.form_2_hakemusten_vastaanotto_sahkoposti ? (
            <Text style={styles.contentTitleText}>
              Hakemusten vastaanotto sähköposti
            </Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_2_hakemusten_vastaanotto_sahkoposti
              ? formData.form_2_hakemusten_vastaanotto_sahkoposti
              : ""}
          </Text>
          {formData.form_3_milloin_tavoitettavissa ? (
            <Text style={styles.contentTitleText}>
              Milloin olet tavoitettavissa
            </Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_3_milloin_tavoitettavissa
              ? formData.form_3_milloin_tavoitettavissa
              : ""}
          </Text>
          {formData.form_3_milloin_vastaat ? (
            <Text style={styles.contentTitleText}>
              Milloin vastaat hakijoille
            </Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_3_milloin_vastaat
              ? formData.form_3_milloin_vastaat
              : ""}
          </Text>
          {formData.form_3_kutsu_haastatteluun ? (
            <Text style={styles.contentTitleText}>
              Haastettelukutsu luonnos
            </Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_3_kutsu_haastatteluun
              ? formData.form_3_kutsu_haastatteluun
              : ""}
          </Text>
          {formData.form_3_vastaus_hylatyille_hakemuksille ||
          formData.form_3_esimerkki_a ||
          formData.form_3_esimerkki_b ? (
            <Text style={styles.contentTitleText}>
              Vastaus hylätyille hakemuksille
            </Text>
          ) : null}
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

      {/* Page 4 */}
      <Page>
        <Image src={PDFbg} alt={"bgimage"} style={styles.img}></Image>
        <View style={styles.content}>
          <Text style={styles.pageTitleText}>4. Haastattelu ja perehdytys</Text>
          {formData.form_4_haastettelutyyppi !== "Valitse" ? (
            <Text style={styles.contentTitleText}>Haastettelutyyppi</Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_4_haastettelutyyppi !== "Valitse"
              ? formData.form_4_haastettelutyyppi
              : ""}
          </Text>
          {formData.form_4_haastattelurunko ? (
            <Text style={styles.contentTitleText}>Haastettelurunko</Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_4_haastattelurunko
              ? formData.form_4_haastattelurunko
              : ""}
          </Text>
          {formData.form_6_perehdytysaika_from &&
          formData.form_6_perehdytysaika_to ? (
            <Text style={styles.contentTitleText}>Perehdytys aika</Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_6_perehdytysaika_from &&
            formData.form_6_perehdytysaika_to
              ? formData.form_6_perehdytysaika_from +
                " - " +
                formData.form_6_perehdytysaika_to
              : ""}
          </Text>
          {formData.form_2_yhteyshenkilot_ja_heidan_yhteystiedot ? (
            <Text style={styles.contentTitleText}>
              Yhteyshenkilöt ja heidän yhteystiedot
            </Text>
          ) : null}
          <Text style={styles.contentText}>
            {formData.form_2_yhteyshenkilot_ja_heidan_yhteystiedot
              ? formData.form_2_yhteyshenkilot_ja_heidan_yhteystiedot
              : ""}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyPdf;
