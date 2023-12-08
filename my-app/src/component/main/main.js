import Sidebar from './mainComponent/sidebar';
import Dashboard from './mainComponent/dashboard';
// import React from 'react';
import './main.css';
import { useState } from 'react';

function Main(props) {
  const [selectData, setSelectData] = useState(props.data);

  return (
    <div className="main">
      <Sidebar data={props.data} />
      <Dashboard data={selectData} setData={setSelectData} />
    </div>
  );
}

export default Main;
