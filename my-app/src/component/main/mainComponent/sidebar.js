import { Trash3 } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { Clipboard2 } from 'react-bootstrap-icons';
import { useState, useContext } from 'react';
import './sidebar.css';
import { Context } from '../Context';

function Sidebar(props) {
  const [category, setCategory] = useState('All');

  props.setSelectCategory(category);
  const { filterArray, dateLocalStorage } = useContext(Context);

  const dataNote = dateLocalStorage();
  function plumbus(e) {
    setCategory(e.target.value);
    filterArray(dataNote, e.target.value);
  }

  return (
    <div className="sidebar">
      <input
        type="text"
        name="search"
        placeholder="...search"
        className="search_main"
      ></input>
      <div className="radio-button">
        <label
          onChange={(e) => plumbus(e)}
          for="All"
          className="sidebar-button"
        >
          
          <input type="radio" id="All" name="drone" value="All"/>
          <a> <Clipboard2 className="sidebar-icon-button" />All notes</a>
        </label>

        <label
          onChange={(e) => plumbus(e)}
          for="Trash"
          className="sidebar-button"
        >
          {' '}
          
          <input type="radio" id="Trash" name="drone" value="Trash" />
          <a> <Trash3 className="sidebar-icon-button" />Trash</a>
        </label>

        <label
          onChange={(e) => plumbus(e)}
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
