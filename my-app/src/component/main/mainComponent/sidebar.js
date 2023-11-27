import { Trash3 } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { Clipboard2 } from 'react-bootstrap-icons';
import './sidebar.css'

function Sidebar(){

    return (
    <div className="sidebar">
      <input type="text" name="search" placeholder='...search' className='search_main'></input>
      <button><Clipboard2/><a>All notes</a></button>
      <button>  <Trash3/><a>Trash</a></button>
      <button><Star/><a>Favorites</a></button>
    </div>
      );
}
export default Sidebar;