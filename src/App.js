import React from 'react';

import Canvas from './components/Canvas';
import './style.css';
import screenshot from './components/screenshot';

function App() {
  return(
         <div className="body">
      <h1>React-Canvas-Draw</h1>
      <h3>A simple yet powerful canvas-drawing component for React</h3>
  
  <Canvas />

<button className="button" onClick = {screenshot}>Download pdf</button>

      
    
      </div>
  );
}

export default App;


