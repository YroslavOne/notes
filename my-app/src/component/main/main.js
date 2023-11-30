import Sidebar from './mainComponent/sidebar';
import Dashboard from './mainComponent/dashboard';
// import React from 'react';
import './main.css';

function Main(props) {
    return (
      <div className='main'>
        <Sidebar/>
        <Dashboard data={props.data}/>
      </div>
    );
  }
  
  export default Main;
  