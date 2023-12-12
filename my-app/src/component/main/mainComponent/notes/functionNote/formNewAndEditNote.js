import './createNote.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function FormNote(props) {
  const [valueInput, setValueInput] = useState(props.inputValue);
  const [valueTexarea, setValueTexarea] = useState(props.texareaValue);
  const [valueSelect, setValueSelect] = useState(props.selectValue);
  const [valueFavorites, setValueFavorites] = useState(props.favoritesValue);

  function forEachValueSelect() {
    let arrayValueSelect = [];
    for (let i = 0; i < valueSelect.length; i++) {
      arrayValueSelect.push(valueSelect[i].value);
    }
    return arrayValueSelect;
  }

  function saveNote() {
    let arraeValueSelected = forEachValueSelect();
    let objCreateNote = {
      id: uuidv4(),
      title: valueInput,
      description: valueTexarea,
      tag: arraeValueSelected,
      trash: false,
      favorites: valueFavorites,
    };
    let arrayDataNote = JSON.parse(localStorage.arrayNote);
    arrayDataNote.push(objCreateNote);
    localStorage.arrayNote = JSON.stringify(arrayDataNote);
    props.setData(arrayDataNote);
    // props.setObj(objCreateNote);

    setValueInput('');
    setValueTexarea('');
    setValueSelect([]);
    setValueFavorites('false');
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
            value={valueFavorites}
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
