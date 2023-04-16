import React from 'react';
import './App.css';
import Nav from '../components/Home/Nav';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Interests from '../components/Interests/Interests';
import Last from '../components/Last/Last';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      <Interests/>
      <Last/>
    </div>
  );
}

export default App;
