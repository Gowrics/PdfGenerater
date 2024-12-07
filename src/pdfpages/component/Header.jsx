// Header.js
import React from "react";
import styles from '../assets/styles.module.css';
import img1 from '../assets/image_7.png';
import icon from '../assets/ImageIcon.png';

const Header = () => {
  return (
    < >
          <div className={styles.HeaderOne}  >
      <div className={styles.HeadingOne}><h1 style={{fontSize:'23px',fontWeight:'400'}} >Yuva Swasthick - U16(M) </h1> </div>
      <div className={styles.HeadingTwo}> <img src={icon} className={styles.ProfileIcon}/><h1 style={{fontSize:'23px',fontWeight:'400'}}>XI Performer</h1></div>
      </div>
      <div className={styles.HeaderTwo} >
      <div className={styles.HeadingThree}><h4 >Player Monthly Report </h4> </div>
      <div  className={styles.HeadingFour}><h4>100 m | 200 m | Long Jump</h4></div>
      </div>
     <center> <img src={img1} 
        alt="Profile" className={styles.ProfileImage}/> </center>
    </>
  );
};

export default Header;
