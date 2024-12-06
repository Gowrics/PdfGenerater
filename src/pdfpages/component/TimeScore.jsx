import React from 'react';
import styles from '../assets/styles.module.css';

const TimeScore = ({ data }) => {
  return (
    <div className={styles.ScoreType}>
      {data.map((item, index) => (
        <span key={index}>
          {item.time} {item.measurement}
          <br />
          <span style={{ fontSize: '10px' }}>{item.scoreType}</span>
        </span>
      ))}
    </div>
  );
};

export default TimeScore;
