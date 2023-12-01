import React, { useState, useEffect } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color, value) => {
    switch (color) {
      case 'r':
        setRValue(value);
        break;
      case 'g':
        setGValue(value);
        break;
      case 'b':
        setBValue(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const redSquare = document.getElementById('redSquare');
    const greenSquare = document.getElementById('greenSquare');
    const blueSquare = document.getElementById('blueSquare');
    const totalSquare = document.getElementById('totalSquare');

    redSquare.style.backgroundColor = `rgb(${rValue}, 0, 0)`;
    greenSquare.style.backgroundColor = `rgb(0, ${gValue}, 0)`;
    blueSquare.style.backgroundColor = `rgb(0, 0, ${bValue})`;
    totalSquare.style.backgroundColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
  }, [rValue, gValue, bValue]);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          id="redSquare"
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: `rgb(${rValue}, 0, 0)`,
          }}
        ></div>
        <div
          id="greenSquare"
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: `rgb(0, ${gValue}, 0)`,
          }}
        ></div>
        <div
          id="blueSquare"
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: `rgb(0, 0, ${bValue})`,
          }}
        ></div>
        <div
          id="totalSquare"
          style={{
            width: '50px',
            height: '100px',
            backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
          }}
        >{`${rValue}, ${gValue}, ${bValue}`}</div>
      </div>

      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(value) => handleColorChange('r', value)}
      />
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(value) => handleColorChange('g', value)}
      />
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(value) => handleColorChange('b', value)}
      />
    </div>
  );
}

export default RGBColorPicker;
