import { Trash3 } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { Clipboard2 } from 'react-bootstrap-icons';
import { useState } from 'react';
import './sidebar.css'

function Sidebar(props){
const [category, setCategory] = useState("All")

  props.setSelectCategory(category)


// function radioChange(e){
//   props.setSelectCategory("All")
// }
  
    return (
    <div className="sidebar">
      <input type="text" name="search" placeholder='...search' className='search_main'></input>
      <div className='radio-button'>
      
      <label onChange={e => setCategory(e.target.value)} for="All" className='sidebar-button'><Clipboard2 className='sidebar-icon-button'/>
      <input type="radio" id="All" name="drone" value="All"/>
      <a>All notes</a>
      </label>
      
      <label onChange={e => setCategory(e.target.value)} for="Trash"  className='sidebar-button'>  <Trash3 className='sidebar-icon-button'/>
      <input type="radio" id="Trash" name="drone" value="Trash"/>
      <a>Trash</a>
      </label>

      
      <label onChange={e => setCategory(e.target.value)} for="Favorites"  className='sidebar-button'><Star className='sidebar-icon-button'/>
      <input type="radio" id="Favorites" name="drone" value="Favorites"/>
      <a>Favorites</a>
      </label>
      </div>
    </div>
      );
}
export default Sidebar;