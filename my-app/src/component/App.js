import './App.css';
import Main from './main/main.js';
import React, { useState } from 'react';
import ArrayNotes from "../data.js"


function App() {
  localStorage.arrayNote = JSON.stringify(ArrayNotes);
  // localStorage.clear();
  // localStorage.removeItem("arrayNote")
  // Storage.arrayNote()
  // JSON.parse(localStorage.storage)
  let dataNote = JSON.parse(localStorage.arrayNotes)
  console.log(dataNote)
  return (
    <div className="App">
<Main data={ArrayNotes}/>
    </div>
  );
}

export default App;
