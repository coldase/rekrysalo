import { Document, Page, Text, Image, StyleSheet } from "@react-pdf/renderer";
import PDFbg from "../../assets/pics/pdfbg.png";

const styles = StyleSheet.create({
  body: {},
  img: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    color: "red",
  },
});

const MyPdf = ({ formData }) => {
  return (
    <Document>
      <Page>
        <Image src={PDFbg} alt={"bgimage"} style={styles.img}></Image>
        <Text>
          {formData.form_2_yrityksen_nimi ? formData.form_2_yrityksen_nimi : ""}
        </Text>
      </Page>
    </Document>
  );
};

export default MyPdf;
