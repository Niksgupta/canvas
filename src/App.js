import React from 'react';

import Canvas from './components/Canvas';
import './style.css';
import screenshot from './components/screenshot';

function App() {
  return(
         <div className="body">
      <h1>LET'S HAVE THE CANVAS </h1>
      <h3>A simple canvas-drawing using ReactJS</h3>
  
  <Canvas />

<button className="button" onClick = {screenshot}>Download pdf</button>

      
    
      </div>
  );
}

export default App;


