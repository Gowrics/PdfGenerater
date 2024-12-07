import React from 'react';
import ApexCharts from "react-apexcharts";
import { FaMinus,FaBed,FaRegSmile,FaWineGlass  } from "react-icons/fa"; 
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
import { rankData } from '../pdfpages/assets/ArrayData';
import RankBox from './component/RankBox';
import { FaCircle } from "react-icons/fa";
import ChartPage from './component/ChartPage';
import { PiBatteryCharging } from "react-icons/pi";
import { MdOutlineWaterDrop } from "react-icons/md";
import CoachComments from './component/CoachComments';
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
          <p style={{fontWeight:'700'}}>Performance Summary</p>
          <div className={styles.ScoreBoard}> 
            <FaMinus style={{ color: "#0C8A6C", fontSize: "19px" }} /> 
            <p>World Record</p>
            <FaMinus style={{ color: "#FFA857", fontSize: "19px" }} />
            <p>National Record</p>
            <FaMinus style={{ color: "#0082D2", fontSize: "19px" }} />
            <p>State Record</p>
            <FaMinus style={{ color: "#818792", fontSize: "19px" }} />
            <p>High Score</p>
            <FaMinus style={{ color: "#EF80AC", fontSize: "19px" }} />
            <p>Low Score</p>         
          </div>
        </div>

        <div className={styles.ScoreChart}>
          <div className={styles.ChartOne}>
            <TitleBar title="100m"  />
            <TimeScore data={timeScore100} />
            <RankBox data={rankData} />
            <ChartComponent/>       
          </div>       

          <div className={styles.ChartTwo}>
            <TitleBar title="200m"/>
            <TimeScore data={timeScore200} />
            <RankBox data={rankData} />
            <ChartComponent/>       
          </div>
        </div>

        <div className={styles.ScoreChart}>
          <div className={styles.ChartThree}>
            <TitleBar title="Long Jump" />
            <TimeScore data={timeScoreLong} />
            <RankBox data={rankData} />
            <ChartComponent/>       
          </div> 
          
          <div className={styles.ChartFour}> 
            <TitleBar title="Coach Comments After Trial"  /> 
            <div className={styles.CoachInfo}>
              <span>100m</span>
              <div className={styles.Box100}>
              <CoachComments/>
              </div>

              <span>200m</span>
              <div className={styles.Box100}>
               <CoachComments/>
              </div>

              <span style={{ marginRight: '250px' }}> Long Jump</span>
              <div className={styles.Box100}>
                 <CoachComments/>
              </div>
            </div>
          </div>
        </div>
        <div style={{backgroundColor:'skyblue',paddingLeft:"70px",marginTop:'-10px'}}>Performance Influencing Factors</div>
        <div className={styles.IconRates}>  
         <div className={styles.IconBox}>
          <div className={styles.sep1}>
            <p>sep-1 to sep-15 </p>
            <i style={{backgroundColor:'#40C185'}}><FaWineGlass style={{color:'white',fontSize: "24px"}}/></i>
            <i style={{backgroundColor:'#F54667'}}><FaBed  style={{ color:'white', fontSize: "24px" }} /></i>
            <i style={{backgroundColor:'#40C185'}}><FaRegSmile style={{color:'white', fontSize: "24px" }} /></i>
            <i style={{backgroundColor:'#F5861E'}}><PiBatteryCharging style={{color:'white',fontSize: "24px"}}/></i>
            <i style={{backgroundColor:'#F5861E'}}><MdOutlineWaterDrop style={{color:'white',fontSize: "24px"}}/></i>
          </div>
          <div className={styles.sep1}>
            <p>sep-16 to sep-30 </p>
            <i style={{backgroundColor:'#FCC828'}}><FaWineGlass style={{color:'white',fontSize: "24px"}}/></i>
            <i style={{backgroundColor:'#40C185'}}><FaBed  style={{ color:'white', fontSize: "24px" }} /></i>
            <i style={{backgroundColor:'#40C185'}}><FaRegSmile style={{color:'white', fontSize: "24px" }} /></i>
            <i style={{backgroundColor:'#40C185'}}><PiBatteryCharging style={{color:'white',fontSize: "24px"}}/></i>
            <i style={{backgroundColor:'#FCC828'}}><MdOutlineWaterDrop style={{color:'white',fontSize: "24px"}}/></i>
          </div>
          </div>
          <div className={styles.Rates}>
          <span><FaCircle style={{ color: "#0C8A6C", fontSize: "15px" }}/> Normal: 85 -90% </span> <br/><br/>
          <span><FaCircle style={{ color: "#F5861E", fontSize: "15px" }} />Moderate: 70-85%</span><br/><br/>
          <span><FaCircle style={{ color: "#F41943", fontSize: "15px" }} />Poor:  &lt; 70%</span><br/><br/>
        
          </div>
        </div>
        <br/>
        <DottedLine />
       

        {/* Footer */}
         <Footer pageNumber={'01/05'} /> 

      </div>
               </>
  );
};
