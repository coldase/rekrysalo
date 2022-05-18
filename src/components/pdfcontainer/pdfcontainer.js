import "./pdfcontainer.css";
import jsPDF from "jspdf";

var lMargin = 15; //left margin in mm
var rMargin = 40; //right margin in mm
var pdfInMM = 210; // width of A4 in mm

const handlePdf = (formdata) => {
  let doc = new jsPDF();

  //Page 1
  doc.setFont(undefined, "bold");
  doc.setFontSize(18);
  doc.text("Pien- ja mikroyrittäjän rekrytointiopas", 15, 20);
  doc.setFontSize(15);
  doc.text("Vaihe 1 - Osaamisen tarve", 15, 40);
  doc.setFont(undefined, "");
  doc.setFontSize(15);
  doc.text(
    "1. Millaista osaamista yrityksesi tarvitsee nyt ja tulevaisuudessa",
    15,
    53
  );

  doc.setFontSize(12);
  //Multiline
  let lines = doc.splitTextToSize(
    formdata.form_1_osaaminen,
    pdfInMM - lMargin - rMargin
  );
  doc.text(lMargin, 62, lines);

  doc.save("test.pdf");
};
export { handlePdf };
