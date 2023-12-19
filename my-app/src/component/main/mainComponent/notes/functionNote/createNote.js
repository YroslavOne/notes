import { useState } from 'react';
import './createNote.css';
import FormNote from './formNewAndEditNote.js';
import { v4 as uuidv4 } from 'uuid';

function CreateNote(props) {
  let inputValue = props.inputValue;
  let texareaValue = props.texareaValue;
  let selectValue = props.selectValue;
  let favoritesValue = props.favoritesValue;
  const [objectForData, setObjectForData] = useState("")
  // const [twoObjectForData, setTwoObjectForData] = useState(objectForData)
  // setTwoObjectForData(objectForData)

  return (
    <FormNote
      favoritesValue={favoritesValue}
      selectValue={selectValue}
      inputValue={inputValue}
      texareaValue={texareaValue}
      setObjectData ={setObjectForData}
      // setData={props.setData}
      dataTag={props.dataTag}
      setDicplay={props.setDicplay}
    />
  );
}
export default CreateNote;
