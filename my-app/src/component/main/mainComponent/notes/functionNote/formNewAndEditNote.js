import './createNote.css';
import { v4 as uuidv4 } from 'uuid';
import { useState, useContext } from 'react';
import { Context } from '../../../Context';

function FormNote(props) {
  const [valueInput, setValueInput] = useState(props.inputValue);
  const [valueTexarea, setValueTexarea] = useState(props.texareaValue);
  const [valueSelect, setValueSelect] = useState(props.selectValue);
  const [valueFavorites, setValueFavorites] = useState(props.favoritesValue);
  const {updateLocalStorageOki, dateLocalStorageOki} = useContext(Context)
  function forEachValueSelect() {
    let arrayValueSelect = [];
    if(valueSelect[0] === "shopping" || valueSelect[0]==="business" || valueSelect[0]==="other things"){
      arrayValueSelect = valueSelect

    } else{
      for (let i = 0; i < valueSelect.length; i++) {
        arrayValueSelect.push(valueSelect[i].value);}
    }
    return arrayValueSelect;
  }

  function saveNote() {
    let arraeValueSelected = forEachValueSelect();
    const arrayDataNote = dateLocalStorageOki()
      
    

  const filterArray = arrayDataNote.filter((filterArrayDataNote)=>
  filterArrayDataNote.id === props.id)
console.log(filterArray.length)
  if(filterArray.length>0){
    arrayDataNote.map((Object, index) => {
      if (Object.id === props.id) {
        Object.id = props.id
        Object.title = valueInput
        Object.description = valueTexarea
        Object.tag = arraeValueSelected
        Object.trash = false
        Object.favorites = valueFavorites
      }})
    updateLocalStorageOki(arrayDataNote);
  }
  else{
    let objCreateNote = {
      id: props.id,
      title: valueInput,
      description: valueTexarea,
      tag: arraeValueSelected,
      trash: false,
      favorites: valueFavorites,
    };
    arrayDataNote.push(objCreateNote);
    updateLocalStorageOki(arrayDataNote);
  }

    setValueInput('');
    setValueTexarea('');
    setValueSelect(props.selectValue);
    setValueFavorites(false);
    // objCreateNote = {}
    props.setDisplay(false)
  }

  return (
    <div className="create-notes">
      <div className="create-notes-text">
        <input
          type="text"
          className="create-notes-title"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          placeholder="Title"
        ></input>
        <textarea
          id="story"
          name="story"
          rows="5"
          cols="33"
          value={valueTexarea}
          className="create-notes-description"
          placeholder="Description"
          onChange={(e) => setValueTexarea(e.target.value)}
        ></textarea>
        {/* <input type="text" className="create-notes-description"></input> */}
        <select
          type="select"
          className="create-notes-tag"
          defaultValue={valueSelect}
          onChange={(e) => setValueSelect(e.target.selectedOptions)}
          multiple
        >
          {props.dataTag.map((tagElem, index) => (
            <option key={index} value={tagElem.name}>{tagElem.name}</option>
          ))}
        </select>
        <div>
          <input
            type="checkbox"
            checked={valueFavorites} 
            id="favorites"
            name="favorites"
            onChange={(e) => setValueFavorites(e.target.checked)}
          />
          <label for="favorites">Favorites</label>
        </div>
      </div>
      <button onClick={saveNote}>Save</button>
    </div>
  );
}
export default FormNote;
