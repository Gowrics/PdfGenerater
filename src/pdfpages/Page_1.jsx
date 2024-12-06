import React from 'react';
import ApexCharts from "react-apexcharts";
import { FaMinus } from "react-icons/fa"; 
import styles from './assets/styles.module.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { chartData } from '../pdfpages/assets/ArrayData'; // Data and options for ApexCharts
import ChartComponent from './component/ChartComponent';
import DottedLine from './component/DottedLine';
import TitleBar from './component/TitleBar';
import TimeScore from './component/TimeScore';
import { timeScore100 } from '../pdfpages/assets/ArrayData';
import { timeScore200 } from '../pdfpages/assets/ArrayData';
import { timeScoreLong } from '../pdfpages/assets/ArrayData';
import {rankData} from '../pdfpages/assets/ArrayData';
import RankBox from './component/RankBox';
import ChartPage from './component/ChartPage';

export const Page_1 = () => {
  return (
    <>
      {/* Offscreen div for HTML content to be captured in the PDF */}
      <div className={styles.PageOne}>   
       <Header/>  
        {/* Instructions Section */}
        <div className={styles.Instruction}>
          <p>
            Instructions by coach <b>Sivasankar</b>
          </p>
          <p className={styles.InstructionBox}>
            This month, you've improved your explosive starts and drive phase in the 100m but need to stay relaxed in the final stretch for better speed. 
            In the 200m, your curve acceleration is strong, but there's room to push harder in the last 50 meters. For long jump, your approach and take-off 
            have improved, but focus on driving your knees higher and extending your legs for better distance. Overall, solid progress across all events, 
            and we'll keep refining your technique next month.
          </p>
        </div>

        {/* Dotted Line Component */}
        <DottedLine />
        {/* Performance Summary Section */}
        <div className={styles.Performance}> 
          <p>Performance Summary</p>
          <div className={styles.ScoreBoard}> 
            <FaMinus style={{ color: "#0C8A6C", fontSize: "19px" }} /> 
            <p>World Record</p>
            <FaMinus style={{ color: "#FFA857", fontSize: "19px" }} />
            <p>World Record</p>
            <FaMinus style={{ color: "#0082D2", fontSize: "19px" }} />
            <p>World Record</p>
            <FaMinus style={{ color: "#818792", fontSize: "19px" }} />
            <p>World Record</p>
            <FaMinus style={{ color: "#EF80AC", fontSize: "19px" }} />
          </div>
        </div>

          <div className={styles.ScoreChart}>
            <div className={styles.ChartOne}>
          <TitleBar title="100m"  />
          <TimeScore data ={timeScore100}/>
          <RankBox data={rankData} />
          <ChartComponent/>       
          </div>       
            <div className={styles.ChartTwo}>
            <TitleBar title="200m"/>
            <TimeScore data ={timeScore200}/>

            <RankBox data={rankData} />
            <ChartComponent/>       

            </div>
         </div>

         <div className={styles.ScoreChart}>
          <div className={styles.ChartThree}>
          <TitleBar title="Long Jump"  />
          <TimeScore data ={timeScoreLong}/>

          <RankBox data={rankData} />

          <ChartComponent/>       
                 </div>       
            <div className={styles.ChartFour}> 
              <TitleBar title="Coach Comments After Trial"  /> 
              

              </div>
          <div></div>
         </div>

        {/* Footer */}
        <Footer pageNumber={'01/05'} />

      </div>
    </>
  );
};
