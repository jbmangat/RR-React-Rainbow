import React, { useState } from 'react'
import './App.css';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 
    'green', 'greenyellow', 'yellow', 'orange', 'red'
  ])
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color} />
    )
  })
  const addColor = (newColor) => {
    setColors([...colors, newColor])
    // console.log('added color!')
  }

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
