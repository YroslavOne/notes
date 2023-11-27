import Sidebar from './mainComponent/sidebar';
import Dashboard from './mainComponent/dashboard';
import './main.css';

function Main() {
    return (
      <div className='main'>
        <Sidebar/>
        <Dashboard/>
      </div>
    );
  }
  
  export default Main;
  