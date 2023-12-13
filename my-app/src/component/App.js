import './App.css';
import Main from './main/main.js';
import React, { useState, useEffect } from 'react';

function App() {
  localStorage.clear()
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
