import Sidebar from './mainComponent/sidebar';
import Dashboard from './mainComponent/dashboard';
// import React from 'react';
import './main.css';
import { useState, useContext } from 'react';

function Main() {

  const [selectCategory, setSelectCategory] = useState('All');
  // const dataForNote = useContext(js);
 


  return (
    <div className="main">
      
      <Dashboard
        category={selectCategory}
      />
    </div>
  );
}

export default Main;
