import React from 'react'
import styles from '../assets/styles.module.css';
const RankBox = ({data}) => {
  return (
<div className={styles.RankBox}>
  <p>Rank</p>
  <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
    {data.map((item, index) => (
      <span key={index} style={{ textAlign: 'center',fontSize:'10px' }}>
        {item.label} <br />
        <span style={{ fontSize: '10px' }}>
          <b style={{ fontSize: '20px' }}>{item.rank}</b>/{item.total}
        </span>
      </span>
    ))}
  </div>
</div>


)
}

export default RankBox