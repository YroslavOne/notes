import "./createNote.css";
import { useState } from "react";

function createNote(props){

// const [valueInput, setValueInput] = useState('')

let thisValueInput
function getValueInput(e){
    thisValueInput= e
}
let thisTexarea
function getTexarea(e){
    thisTexarea = e
}
let thisSelect
function getSelect(e){
    thisSelect = e
}
let thisFavorites
function getFavorites(e){
thisFavorites = e
}

function saveNote(){

console.log(thisValueInput)
console.log(thisTexarea)
console.log(thisSelect)   
console.log(thisFavorites)
}

    return(
<div className="create-notes">
      <div className="create-notes-text">
        <input type="text" className="create-notes-title" onChange={e => getValueInput(e.target.value)} placeholder="Title"></input>
        <textarea id="story" name="story" rows="5" cols="33" className="create-notes-description" placeholder="Description" onChange={e => getTexarea(e.target.value)}></textarea>
        {/* <input type="text" className="create-notes-description"></input> */}
        <select type="select" className="create-notes-tag" onChange={e => getSelect(e.target.selectedOptions)} multiple>
        {props.dataTag.map((tagElem)=>
            <option value={tagElem.name}>{tagElem.name}</option>
        )
            }
        </select>
        <div>
        <input type="checkbox" id="favorites" name="favorites" onChange={e=>getFavorites(e.target.checked)}/>
    <label for="favorites" >Favorites</label>
      </div>
      </div>
      <button onClick={saveNote}>Save</button>
    </div>
    );
}
export default createNote;