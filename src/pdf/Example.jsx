import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Page_1 } from "./Page_1";
import { Page_2 } from "./Page_2";
import { Page_3 } from "./Page_3";
import { Page_4 } from "./Page_4";
import { Page_5 } from "./Page_5";

const PdfButton = () => {
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

  return (
    <div>
      <button onClick={generatePdf}>Download PDF file</button>

      {/* Offscreen div for HTML content to be captured in the PDF */}
      <div
        ref={pdfRef}
        className="pdf-content"
        style={{
          padding: "20px",
          position: "absolute",
          top: "-9999px", // Offscreen positioning
          left: "-9999px",
          width: "210mm", // A4 width in mm
        }}
      >
<Page_1/>
<Page_2/>
<Page_3/>
<Page_4/>
<Page_5/>

      </div>
    </div>
  );
};

export default PdfButton;
// image compressed

import React from "react";
import jsPDF from "jspdf";
import ReactDOM from "react-dom"; // Import ReactDOM
import imageCompression from 'browser-image-compression';
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
      tempDiv.style.position = "absolute";
      tempDiv.style.padding = "20px";
      tempDiv.style.top = "-9999px";
      tempDiv.style.left = "-9999px";
      tempDiv.style.width = "210mm"; // Match A4 width
      tempDiv.style.height = "297mm"; // Match A4 height
      tempDiv.style.backgroundColor = "#fff";
      document.body.appendChild(tempDiv);
  
      // Render the page into the container
      const page = pages[i];
      ReactDOM.render(page, tempDiv);
      await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for 500ms
  
      // Capture the content using html2canvas
      await html2canvas(tempDiv, { scale: 1, useCORS: true }).then(async (canvas) => {
        // Convert canvas to a blob for compression
        const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 1.0));
  
        // Compression options
        const options = {
          maxSizeMB: 0.5, // Maximum size in MB
          maxWidthOrHeight: 1080, // Max dimensions
          useWebWorker: true, // Use web worker for performance
        };
  
        // Compress the image
        const compressedBlob = await imageCompression(blob, options);
  
        // Convert the compressed blob to a data URL
        const imgData = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(compressedBlob);
        });
  
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
        // Add the compressed image to the PDF
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
    pdf.save("ImageCompresseddownload.pdf");
  };
  
  return (
    <div>
      <button onClick={generatePdf}>Download PDF</button>
    </div>
  );
};

export default PdfButton;
// --------------headre
<div style={{backgroundColor:"#636A76",display:"flex" ,flexDirection:"row"}} >
<h1 >Yuva Swasthick - U16(M) </h1> <h1 style={{marginLeft:"300px"}}>Yuva Swasthick - U16(M) </h1>
     </div>

// map function
import React from 'react'
import ApexCharts from "react-apexcharts";
import Header from './component/Header';
import Footer from './component/Footer';
import {chartData} from '../pdfpages/assets/ArrayData';      //  data and options for ApexCharts
import ChartComponent from './component/ChartComponent';
export const Page_1 = () => {
    
  
  return (

    <div className="pdf-content">
      {/* Offscreen div for HTML content to be captured in the PDF */}
      <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
                  <Header/> 
        <h2>Report Title</h2>
        <p>This is a sample report including text and a chart.</p>
        
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>      
        {chartData.map((data,index) => (
       <div key={index} style={{ margin: "20px 0" }}>
        <ChartComponent 
        options={data.options} 
        series={data.series} 
        type="line" 
  //   width="100%" 
    //    height="300" 
      />
       </div>
         )) }
         </div>
        <Footer pageNumber={'01/05'} />
      </div>
    </div>
  )
}

-------------------------------------
{chartData.map((data, index) => (
  <div key={index} style={{ margin: "20px 0" }}>
    <ChartComponent 
      options={data.options} 
      series={data.series} 
      type="line" 
    />
  </div>
))}

-----------------------------
{/* <div className={styles.RankBox} >
  <p>Rank</p>
  <div style={{display:'flex',flexDirection:'row'}}>
     <span>District <br/><span style={{fontSize:'10px'}}><b style={{fontSize:'20px'}}>01</b>/368</span></span>
     <span>State <br/><span style={{fontSize:'10px'}}><b style={{fontSize:'20px'}}>01</b>/368</span></span>
     <span>National <br/><span style={{fontSize:'10px'}}><b style={{fontSize:'20px'}}>01</b>/368</span></span>
</div>
</div> */}


{/* <div className={styles.ScoreType}>          
  <span>11.11 s <br/><span style={{fontSize:'10px'}}>High Score</span></span>
  <span>11.11 s <br/><span style={{fontSize:'10px'}}>High Score</span></span>
  <span>11.11 s <br/><span style={{fontSize:'10px'}}>High Score</span></span>
  <span>11.11 s <br/><span style={{fontSize:'10px'}}>High Score</span></span>
</div> */}
