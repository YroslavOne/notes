import Sidebar from './mainComponent/sidebar';
import Dashboard from './mainComponent/dashboard';
// import React from 'react';
import './main.css';
import { useState } from 'react';

function Main() {

  const [selectCategory, setSelectCategory] = useState('All');
 
  return (
    <div className="main">
      <Sidebar setSelectCategory={setSelectCategory} />
      <Dashboard
        category={selectCategory}
      />
    </div>
  );
}

export default Main;
