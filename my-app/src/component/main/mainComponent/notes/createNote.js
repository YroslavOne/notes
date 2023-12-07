import "./createNote.css";
import FormNote from "./formNewAndEditNote.js";
import { v4 as uuidv4 } from 'uuid';


function createNote(props){
let inputValue = ""
let texareaValue = ""
let selectValue = ["shopping"]
let favoritesValue = false

    return(
        <FormNote favoritesValue={favoritesValue} selectValue={selectValue} inputValue={inputValue} texareaValue={texareaValue} data={props.data} dataTag={props.dataTag}/>
    );
}
export default createNote;