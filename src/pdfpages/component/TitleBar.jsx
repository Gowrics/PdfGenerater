// TitleBar.js
import React from 'react';
import styles from '../assets/styles.module.css';

const TitleBar = ({ title, width }) => {
  return (
    <p className={styles.TitleBar} style={{ width }}>
      {title}
    </p>
  );
};

export default TitleBar;
