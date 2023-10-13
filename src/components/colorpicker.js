// ColorPicker.js
import React, { useState } from 'react';
import ColorList from './ColorList';

function ColorPicker({ colors }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const handleButtonClick = () => {
    setShowColorList(true);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor = color;
  };

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    margin:'100px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button onClick={handleButtonClick} style={buttonStyle}>Pick a color</button>
      {showColorList && (
        <ColorList colors={colors} onColorSelect={handleColorSelect} />
      )}
    </div>
  );
}

export default ColorPicker;