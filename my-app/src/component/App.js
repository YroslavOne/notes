import './App.css';
import Main from './main/main.js';
import React, { useState } from 'react';
import ArrayNotes from "../data.js"


function App() {
  // localStorage.arrayNote = JSON.stringify(ArrayNotes);
  let localStorageArrayNote = localStorage.arrayNote
  console.log(localStorageArrayNote)
  // let dataNote = [];
  let dataNote = JSON.parse(localStorage.arrayNote)
  console.log(dataNote)
  return (
    <div className="App">
<Main data={dataNote}/>
    </div>
  );
}

export default App;
