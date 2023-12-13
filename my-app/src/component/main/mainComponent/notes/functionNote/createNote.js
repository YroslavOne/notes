import { useState } from 'react';
import './createNote.css';
import FormNote from './formNewAndEditNote.js';
import { v4 as uuidv4 } from 'uuid';

function CreateNote(props) {
  let inputValue = '';
  let texareaValue = '';
  let selectValue = [''];
  let favoritesValue = false;
  const [objectForData, setObjectForData] = useState("")
  // const [twoObjectForData, setTwoObjectForData] = useState(objectForData)
  // setTwoObjectForData(objectForData)


  if(objectForData !== ""){
  let arrayDataNote = JSON.parse(localStorage.arrayNote);
  const filterArray = arrayDataNote.filter((filterArrayDataNote)=>
filterArrayDataNote.id === objectForData.id)
  if(filterArray){
    arrayDataNote.push(objectForData);
  localStorage.arrayNote = JSON.stringify(arrayDataNote);
  setObjectForData("")
  }
  setObjectForData("")
}

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
