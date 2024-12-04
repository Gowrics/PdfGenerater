import React, { useRef } from "react";
import ApexCharts from "react-apexcharts";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Header from "./Header";
import Footer from "./Footer";

const PdfDownload = () => {
  const pdfRef = useRef();

  const generatePdf = () => {
    const element = pdfRef.current;

    html2canvas(element, { scale: 1, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg",1);
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190; // Width of A4 page in mm
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let position = 10;
      pdf.addImage(imgData, "JPEG", 10, position, imgWidth, imgHeight);

      // Save the PDF
      pdf.save("download.pdf");
    });
  };

  // Sample data and options for ApexCharts
  const chartData = {
    series: [
      {
        name: "Sample Data",
        data: [10, 20, 15, 30, 40, 35],
      },
    ],
    options: {
      chart: {
        type: "line",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
    },
  };

  return (
    <div>
      <button onClick={generatePdf}>Download PDF</button>

      {/* Offscreen div for HTML content to be captured in the PDF */}
      <div
        ref={pdfRef}
        className="pdf-content1"
        style={{
          padding: "20px",
          position: "absolute",
          top: "-9999px", // Offscreen positioning
          left: "-9999px",
          width: "210mm", // A4 width in mm
        }}
      >
        <Header />
        <h2>Report Title</h2>

        <p>This is a sample report including text and a chart.</p>

        <div>
          <ApexCharts
            options={chartData.options}
            series={chartData.series}
            type="line"
            width="100%"
            height="300"
          />
        </div>
        <Footer pageNumber={1} />
      </div>
    </div>
  );
};

export default PdfDownload;
