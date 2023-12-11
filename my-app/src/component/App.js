import './App.css';
import Main from './main/main.js';
import React, { useState } from 'react';
import ArrayNotes from '../data.js';

function App() {
  if (localStorage.arrayNote) {
  } else {
    localStorage.arrayNote = JSON.stringify(ArrayNotes);
  }
  let dataNote = JSON.parse(localStorage?.arrayNote);
  return (
    <div className="App">
      <Main data={dataNote} />
    </div>
  );
}

export default App;
