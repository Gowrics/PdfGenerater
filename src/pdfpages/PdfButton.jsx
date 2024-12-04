import React from "react";
import jsPDF from "jspdf";
import ReactDOM from "react-dom"; // Import ReactDOM
import html2canvas from "html2canvas";
import { Page_1 } from "./Page_1";
import { Page_2 } from "./Page_2";
import { Page_3 } from "./Page_3";
import { Page_4 } from "./Page_4";
import { Page_5 } from "./Page_5";

const PdfButton = () => {
  const pages = [<Page_1 />, <Page_2 />, <Page_3 />, <Page_4 />, <Page_5 />];

  const generatePdf = async () => {
    const pdf = new jsPDF("p", "mm", "a4"); // A4 dimensions

    for (let i = 0; i < pages.length; i++) {
      const tempDiv = document.createElement("div");
     // tempDiv.style.position = "absolute";
      tempDiv.style.padding ="0px";
      //tempDiv.style.top = "-9999px";
      //tempDiv.style.left = "-9999px";
      tempDiv.style.width = "210mm"; // Match A4 width
      tempDiv.style.height = "297mm"; // Match A4 height
      tempDiv.style.backgroundColor = "#fff";
      document.body.appendChild(tempDiv);

      // Render the page into the container
      const page = pages[i];
      ReactDOM.render(page, tempDiv);
      await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for 500ms
      
      // Capture the content using html2canvas
      await html2canvas(tempDiv, { scale: 1, useCORS: true }).then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg");
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Add captured image to PDF
        pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);

        // Add a new page unless it's the last one
        if (i < pages.length - 1) {
          pdf.addPage();
        }
      });

      // Clean up the temporary DOM element
      ReactDOM.unmountComponentAtNode(tempDiv);
      document.body.removeChild(tempDiv);
    }

    // Save the PDF
    pdf.save("downloadscale(5).pdf");
  };

  return (
    <div>
      <button onClick={generatePdf}>Download PDF</button>
    </div>
  );
};

export default PdfButton;
