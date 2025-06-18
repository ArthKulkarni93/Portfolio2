import React from 'react';
import './index.css'
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-[#0f0c12] pt-15 p-10 ">
      <Navbar/>
      <Bio/>
      <Projects/>
    </div>
  );
}

export default App;