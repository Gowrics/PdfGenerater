import React from 'react'
import ApexCharts from "react-apexcharts";
import Header from './component/Header';
import Footer from './component/Footer';
import {chartData} from '../pdfpages/assets/ArrayData';      //  data and options for ApexCharts
import ChartComponent from './component/ChartComponent';
export const Page_5 = () => {
    
  
  return (

    <div className="pdf-content">
      {/* Offscreen div for HTML content to be captured in the PDF */}
      <div>
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
        <Footer pageNumber={'05/05'} />
      </div>
    </div>
  )
}
