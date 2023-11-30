import { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

function Dice() {
  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];
  let randomNumber = Math.floor(Math.random() * 6);

  const [randomizedDice, setRandomizedDice] = useState(dices[randomNumber]);

  const handleClick = () => {
    setRandomizedDice(emptyDice);
    setTimeout(() => {
      setRandomizedDice(dices[randomNumber]);
    }, 1000);
  };
  return (
    <div>
      <img
        src={randomizedDice}
        alt="dice3"
        width="200px"
        onClick={handleClick}
      />
    </div>
  );
}

export default Dice;
