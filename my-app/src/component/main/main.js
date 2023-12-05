import Sidebar from './mainComponent/sidebar';
import Dashboard from './mainComponent/dashboard';
// import React from 'react';
import './main.css';
import { useState } from 'react';

function Main(props) {
const [selectData, setSelectData] = useState(1)
// localStorage.setItem('arrayNote', props.data);
localStorage.arrayNote = JSON.stringify(props.data);


    return (
      <div className='main'>
        <Sidebar data={props.data} setData = {setSelectData}/>
        <Dashboard data={selectData}/>
      </div>
    );
  }
  
  export default Main;
  