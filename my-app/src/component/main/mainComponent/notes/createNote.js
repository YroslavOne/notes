import "./createNote.css"

function createNote(props){


    return(
<div className="create-notes">
      <div className="create-notes-text">
        <input type="text" className="create-notes-title"></input>
        <textarea id="story" name="story" rows="5" cols="33" className="create-notes-description"> It was a dark and stormy night...</textarea>

        {/* <input type="text" className="create-notes-description"></input> */}
        <select type="select" className="create-notes-tag">
        {props.dataTag.map((tagElem)=>
            <option value={tagElem.name}>{tagElem.name}</option>
        )
            }
        </select>
        <input type="checkbox" id="favorites" name="favorites"/>
    <label for="favorites">Favorites</label>
      </div>
    </div>
    );
}
export default createNote;