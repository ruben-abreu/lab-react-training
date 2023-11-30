import { useState } from 'react';

function NumbersTable({ limit }) {
  const [numbers, setNumbers] = useState([]);

  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }
  const ifEven = (numbers) => (numbers % 2 === 0 ? 'even' : null);

  return (
    <div className="numbers">
      {numbers.map((number, index) => (
        <span key={index} id={ifEven(number)} className="numbersSpan">
          {number}{' '}
        </span>
      ))}
    </div>
  );
}

export default NumbersTable;
