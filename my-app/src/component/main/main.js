import Sidebar from './mainComponent/sidebar';
import Dashboard from './mainComponent/dashboard';
// import React from 'react';
import './main.css';
import { useState } from 'react';

function Main(props) {
  const [selectData, setSelectData] = useState(props.data);
  const [selectCategory, setSelectCategory] = useState('All')
  // console.log("setSelectCategory")
  // console.log(selectCategory)


  return (
    <div className="main">
      <Sidebar setSelectCategory={setSelectCategory} />
      <Dashboard data={selectData} setData={setSelectData} category={selectCategory} />
    </div>
  );
}

export default Main;
