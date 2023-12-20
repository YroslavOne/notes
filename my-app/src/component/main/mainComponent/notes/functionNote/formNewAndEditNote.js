import './createNote.css';
import { useState, useContext } from 'react';
import { Context } from '../../../Context';

function FormNote(props) {
  const [valueInput, setValueInput] = useState(props.inputValue);
  const [valueTextarea, setValueTextarea] = useState(props.textareaValue);
  const [valueSelect, setValueSelect] = useState(props.selectValue);
  const [valueFavorites, setValueFavorites] = useState(props.favoritesValue);
  const { updateLocalStorage, dateLocalStorage } = useContext(Context);
  function forEachValueSelect() {
    let arrayValueSelect = [];
    if (
      valueSelect[0] === 'shopping' ||
      valueSelect[0] === 'business' ||
      valueSelect[0] === 'other things'
    ) {
      arrayValueSelect = valueSelect;
    } else {
      for (let i = 0; i < valueSelect.length; i++) {
        arrayValueSelect.push(valueSelect[i].value);
      }
    }
    return arrayValueSelect;
  }

  function saveNote() {
    let arraeValueSelected = forEachValueSelect();
    const arrayDataNote = dateLocalStorage();

    const filterArray = arrayDataNote.filter(
      (filterArrayDataNote) => filterArrayDataNote.id === props.id
    );
    if (filterArray.length > 0) {
      arrayDataNote.map((Object, index) => {
        if (Object.id === props.id) {
          Object.id = props.id;
          Object.title = valueInput;
          Object.description = valueTextarea;
          Object.tag = arraeValueSelected;
          Object.trash = false;
          Object.favorites = valueFavorites;
        }
      });
      updateLocalStorage(arrayDataNote);
    } else {
      let objCreateNote = {
        id: props.id,
        title: valueInput,
        description: valueTextarea,
        tag: arraeValueSelected,
        trash: false,
        favorites: valueFavorites,
      };
      arrayDataNote.push(objCreateNote);
      updateLocalStorage(arrayDataNote);
    }

    setValueInput('');
    setValueTextarea('');
    setValueSelect(props.selectValue);
    setValueFavorites(false);
    props.setOnDisplay(false);
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
          value={valueTextarea}
          className="create-notes-description"
          placeholder="Description"
          onChange={(e) => setValueTextarea(e.target.value)}
        ></textarea>
        <select
          type="select"
          className="create-notes-tag"
          defaultValue={valueSelect}
          onChange={(e) => setValueSelect(e.target.selectedOptions)}
          multiple
        >
          {props.dataTag.map((tagElem, index) => (
            <option key={index} value={tagElem.name}>
              {tagElem.name}
            </option>
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
