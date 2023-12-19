import { Trash3 } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { Clipboard2 } from 'react-bootstrap-icons';
import { useState, useContext } from 'react';
import './sidebar.css'
import { Context } from '../Context';

function Sidebar(props){
const [category, setCategory] = useState("All")

  props.setSelectCategory(category)
  const {filterArray, dateLocalStorageOki} = useContext(Context)


  const dataNote = dateLocalStorageOki()
  function plumbus(e){
    setCategory(e.target.value)
    filterArray(dataNote, e.target.value)
  }


  
    return (
    <div className="sidebar">
      <input type="text" name="search" placeholder='...search' className='search_main'></input>
      <div className='radio-button'>
      
      <label onChange={e => plumbus(e)} for="All" className='sidebar-button'><Clipboard2 className='sidebar-icon-button'/>
      <input type="radio" id="All" name="drone" value="All"/>
      <a>All notes</a>
      </label>
      
      <label onChange={e => plumbus(e)} for="Trash"  className='sidebar-button'>  <Trash3 className='sidebar-icon-button'/>
      <input type="radio" id="Trash" name="drone" value="Trash"/>
      <a>Trash</a>
      </label>

      
      <label onChange={e => plumbus(e)} for="Favorites"  className='sidebar-button'><Star className='sidebar-icon-button'/>
      <input type="radio" id="Favorites" name="drone" value="Favorites"/>
      <a>Favorites</a>
      </label>
      </div>
    </div>
      );
}
export default Sidebar;