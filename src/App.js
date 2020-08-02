import React from 'react';
import './App.css';
import Main from './components/main/main.js';
import About from './components/about/about.js';
import Experience from './components/experience/experience.js'
import Music from './components/music/music.js';


function App() {
  return (
    <div>
      <Main/>
      <About/>
      <Experience/>
      <Music/>
    </div>
  );
}

export default App;
