import styles from '../styles/Dice.module.css';
import { useState } from 'react';

function Dice(props) {
  const [nbClicks, setNbClicks] = useState(0);

  const handleClick = () => {
    props.launchOneDice(props.index);
    setNbClicks(nbClicks + 1);
  };
  return (
    <div>
      <img className={styles.dice} src={`${props.number}.png`} alt={props.number} onClick={() => handleClick()} />
      <span className={styles.counter}>{nbClicks}</span>
    </div>
  );
}

export default Dice;
