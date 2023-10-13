
import './App.css';

// App.js
import React from 'react';
import ColorPicker from './components/colorpicker';

function App() {
  const colors = ['#FF0000', '#00FF00', '#00008B', '#FFFF00', '#FF00FF','#50EBEC','#FFA600','#4B0150','#FFB2D0','#004225','#01F9C6','#800000'];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;