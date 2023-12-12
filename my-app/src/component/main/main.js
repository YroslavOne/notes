import Sidebar from './mainComponent/sidebar';
import Dashboard from './mainComponent/dashboard';
import ArrayNotes from '../../data.js';
// import React from 'react';
import './main.css';
import { useState } from 'react';

function Main(props) {

  if (localStorage.arrayNote) {
  } else {
    localStorage.arrayNote = JSON.stringify(ArrayNotes);
  }
  let dataNote = JSON.parse(localStorage?.arrayNote);

  
  const [selectData, setSelectData] = useState(dataNote);
  const [selectCategory, setSelectCategory] = useState('All');
  // console.log("setSelectCategory")
  // console.log(selectCategory)

  return (
    <div className="main">
      <Sidebar setSelectCategory={setSelectCategory} />
      <Dashboard
        data={selectData}
        setData={setSelectData}
        category={selectCategory}
      />
    </div>
  );
}

export default Main;
