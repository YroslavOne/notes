import { Trash3 } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { Clipboard2 } from 'react-bootstrap-icons';
import { useState, useContext } from 'react';
import './sidebar.css';
import { Context } from '../Context';

function Sidebar(props) {
  const [category, setCategory] = useState('All');
  const [valueSearch, setValueSearch] = useState("")

  props.setSelectCategory(category);
  props.setValueSearch(valueSearch);
  const { filterArray, dateLocalStorage } = useContext(Context);

  const dataNote = dateLocalStorage();

  const tapSearch=(value)=>{
    setValueSearch(value)
    senddataForFilter(category, value)
  }

  const tapButton=(value)=>{

    setCategory(value)
    senddataForFilter(value, valueSearch)
  }

  function senddataForFilter(itCategory, itValueSearch) {
    filterArray(dataNote, itCategory, itValueSearch, props.selectTag);
  }

  return (
    <div className="sidebar">
      <input
        type="text"
        name="search"
        placeholder="...search"
        className="search_main"
        value={valueSearch}
        onChange={(e)=>tapSearch(e.target.value)}
      ></input>
      <div className="radio-button">
        <label
          onChange={(e) => tapButton(e.target.value)}
          for="All"
          className="sidebar-button"
        >
          
          <input type="radio" id="All" name="drone" value="All"/>
          <a> <Clipboard2 className="sidebar-icon-button" />All notes</a>
        </label>

        <label
         onChange={(e) => tapButton(e.target.value)}
          for="Trash"
          className="sidebar-button"
        >
          {' '}
          
          <input type="radio" id="Trash" name="drone" value="Trash" />
          <a> <Trash3 className="sidebar-icon-button" />Trash</a>
        </label>

        <label
          onChange={(e) => tapButton(e.target.value)}
          for="Favorites"
          className="sidebar-button"
        >
          
          <input type="radio" id="Favorites" name="drone" value="Favorites" />
          <a> <Star className="sidebar-icon-button" />Favorites</a>
        </label>
      </div>
    </div>
  );
}
export default Sidebar;
