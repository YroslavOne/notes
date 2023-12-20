import './createNote.css';
import FormNote from './formNewAndEditNote.js';

function CreateNote(props) {
  let inputValue = props.inputValue;
  let textareaValue = props.textareaValue;
  let selectValue = props.selectValue;
  let favoritesValue = props.favoritesValue;
  let id = props.itId;

  return (
    <FormNote
      favoritesValue={favoritesValue}
      selectValue={selectValue}
      inputValue={inputValue}
      textareaValue={textareaValue}
      dataTag={props.dataTag}
      setOnDisplay={props.setOnDisplay}
      id={id}
    />
  );
}
export default CreateNote;
