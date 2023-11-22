import Dice from './Dice';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

function Home() {
  const [dicesData, setDicesData] = useState([]);

  const launchAllDices = () => {
    setDicesData(Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1));
  };

  const launchOneDice = (index) => {
    const dices = [...dicesData];
    dices[index] = Math.floor(Math.random() * 6) + 1;
    setDicesData(dices);
  };

  const total = dicesData.reduce((acc, cur) => acc + cur, 0);
  const dices = dicesData.map((data, i) => {
    return <Dice key={i} index={i} launchOneDice={launchOneDice} number={data} />;
  });

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.triangleLeft}></div>
        <div className={styles.triangleLeftRed}></div>
        <div className={styles.triangleLeft}></div>
      </div>
      <div className={styles.middleSection}>
        <img src="logo.png" alt="Logo" className={styles.logo} />
        <div className={styles.board}>
          <div className={styles.dices}>
            {dices}
          </div>
          <span className={styles.total}>Total : <span id="total">{total}</span></span>
        </div>
        <button className={styles.launchBtn} onClick={() => launchAllDices()}>Launch</button>
      </div>
      <div>
        <div className={styles.triangleRight}></div>
        <div className={styles.triangleRightRed}></div>
        <div className={styles.triangleRight}></div>
      </div>
    </div>
  );
}

export default Home;
