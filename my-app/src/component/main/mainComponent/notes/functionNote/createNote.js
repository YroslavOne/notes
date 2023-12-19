import { useState } from 'react';
import './createNote.css';
import FormNote from './formNewAndEditNote.js';
import { v4 as uuidv4 } from 'uuid';

function CreateNote(props) {
  let inputValue = props.inputValue;
  let texareaValue = props.texareaValue;
  let selectValue = props.selectValue;
  let favoritesValue = props.favoritesValue;
  let id = props.itId

  return (
    <FormNote
      favoritesValue={favoritesValue}
      selectValue={selectValue}
      inputValue={inputValue}
      texareaValue={texareaValue}
      dataTag={props.dataTag}
      setDisplay={props.setDisplay}
      id={id}
    />
  );
}
export default CreateNote;
