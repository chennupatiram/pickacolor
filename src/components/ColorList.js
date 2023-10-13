// ColorList.js
import React from 'react';

function ColorList({ colors, onColorSelect }) {
  const colorListStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const colorOptionStyle = {
    backgroundColor: 'white',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    margin: '5px',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Add box shadow
  };

  return (
    <div style={colorListStyle}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{ ...colorOptionStyle, backgroundColor: color }} // Set the background color
          onClick={() => onColorSelect(color)}
        ></div>
      ))}
    </div>
  );
}

export default ColorList;