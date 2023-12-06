import Sidebar from './mainComponent/sidebar';
import Dashboard from './mainComponent/dashboard';
// import React from 'react';
import './main.css';
import { useState } from 'react';

function Main(props) {
const [selectData, setSelectData] = useState(props.data)



    return (
      <div className='main'>
        <Sidebar data={props.data} setData = {setSelectData}/>
        <Dashboard data={selectData}/>
      </div>
    );
  }
  
  export default Main;
  