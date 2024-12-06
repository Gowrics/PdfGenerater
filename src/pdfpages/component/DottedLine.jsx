import React from 'react'
import styles from '../assets/styles.module.css';

const DottedLine = () => {
    const dots = Array(80).fill(null);  

  return (
    <div>
          <div className={styles.DotLineContainer}>
            {dots.map((_, index) => (
             <div key={index} className={styles.DotLine}></div>
              ))}
            </div>      
    </div>
  )
}

export default DottedLine