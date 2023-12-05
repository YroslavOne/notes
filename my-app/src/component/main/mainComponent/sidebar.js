import { Trash3 } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { Clipboard2 } from 'react-bootstrap-icons';
import './sidebar.css'

function Sidebar(props){

function radioChange(e){
  
  if(e === "All"){
    const dataFilter =  props.data.filter(ObjectElem=>ObjectElem.trash !== true)
    props.setData(dataFilter)
  } else { 
    if(e === "Trash"){
      const dataFilter =  props.data.filter(ObjectElem=>ObjectElem.trash === true)
      props.setData(dataFilter)
  } else {
    if (e === "Favorites"){
      const dataFilter =  props.data.filter(ObjectElem=>ObjectElem.favorites === true)
      props.setData(dataFilter)}
    
  } 
  }
}
  
    return (
    <div className="sidebar">
      <input type="text" name="search" placeholder='...search' className='search_main'></input>
      <div className='radio-button'>
      
      <label onChange={e => radioChange(e.target.value)} for="All" className='sidebar-button'><Clipboard2 className='sidebar-icon-button'/>
      <input type="radio" id="All" name="drone" value="All"/>
      <a>All notes</a>
      </label>
      
      <label onChange={e => radioChange(e.target.value)} for="Trash"  className='sidebar-button'>  <Trash3 className='sidebar-icon-button'/>
      <input type="radio" id="Trash" name="drone" value="Trash"/>
      <a>Trash</a>
      </label>

      
      <label onChange={e => radioChange(e.target.value)} for="Favorites"  className='sidebar-button'><Star className='sidebar-icon-button'/>
      <input type="radio" id="Favorites" name="drone" value="Favorites"/>
      <a>Favorites</a>
      </label>
      {/* <label>
          <input type="radio" name="myRadio" value="option1" />
          Option 1
        </label>
        <label>
          <input type="radio" name="myRadio" value="option2" />
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label> */}
      </div>
    </div>
      );
}
export default Sidebar;