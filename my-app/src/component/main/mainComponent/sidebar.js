import { Trash3 } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { Clipboard2 } from 'react-bootstrap-icons';
import './sidebar.css'

function Sidebar(){

    return (
    <div className="sidebar">
      <input type="text" name="search" placeholder='...search' className='search_main'></input>
      <div className='radio-button'>
      <input type="radio" id="All" name="drone" value="All"/>
      <label for="All" className='sidebar-button'><Clipboard2 className='sidebar-icon-button'/><a>All notes</a></label>
      <input type="radio" id="Trash" name="drone" value="Trash"/>
      <label for="Trash"  className='sidebar-button'>  <Trash3 className='sidebar-icon-button'/><a>Trash</a></label>
      <input type="radio" id="Favorites" name="drone" value="Favorites"/>
      <label for="Favorites"  className='sidebar-button'><Star className='sidebar-icon-button'/><a>Favorites</a></label>
      </div>
    </div>
      );
}
export default Sidebar;