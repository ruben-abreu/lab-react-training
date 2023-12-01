import React, { useState } from 'react';

function SingleColorPicker({ color, value, onChange }) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <label htmlFor={`${color}Color`}>{color.toUpperCase()}</label>
      <input
        type="number"
        name={`${color}Color`}
        id={`${color}Color`}
        value={inputValue}
        onChange={handleInputChange}
        min={0}
        max={255}
      />
    </div>
  );
}

export default SingleColorPicker;
