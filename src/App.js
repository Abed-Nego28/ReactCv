// App.js

import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Competences from './components/Competences';
import CentresInteret from './components/CentresInteret';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="left-column">
          <Profile />
          <Skills />
          <Competences />
          <CentresInteret />
        </div>
        <div className="right-column">
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
