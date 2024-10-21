// src/App.js
import React from 'react';
import HeaderText from './components/HeaderText';
import './components/HeaderText.css';
import './App.css';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
       <HeaderText />
    <div style={{ height: '100vh' }}></div> 
      <Timeline/>
    </div>
  );
}

export default App;
