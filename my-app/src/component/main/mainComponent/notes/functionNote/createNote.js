import './createNote.css';
import FormNote from './formNewAndEditNote.js';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function CreateNote(props) {
  let inputValue = '';
  let texareaValue = '';
  let selectValue = [''];
  let favoritesValue = false;

  return (
    <FormNote
      favoritesValue={favoritesValue}
      selectValue={selectValue}
      inputValue={inputValue}
      texareaValue={texareaValue}
      setData={props.setData}
      dataTag={props.dataTag}
    />
  );
}
export default CreateNote;
