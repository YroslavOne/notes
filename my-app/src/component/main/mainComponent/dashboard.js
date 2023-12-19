import Notes from './notes/notes';
import СreateNote from './notes/functionNote/createNote';
import './dashboard.css';
import ArrayTags from '../../../dataTag';
import ArrayNotes from '../../../data.js';
import { useState, useEffect } from 'react';
import { Display, Plus } from 'react-bootstrap-icons';
import { Context } from '../Context';
import Sidebar from './sidebar';



function Dashboard(props) {

  if (localStorage.arrayNote) {
  } else {
    localStorage.arrayNote = JSON.stringify(ArrayNotes);
  }
  let dataNotes = JSON.parse(localStorage?.arrayNote);

  const [dataNote, setDataNote] = useState(dataNotes);
  const [filterDataNote, setFilterDataNote] = useState(dataNotes);
  const [onDisplay, setDicplay] = useState(false)
  const [selectCategory, setSelectCategory] = useState('All');
  const [inputValue, setInputValue] = useState('');
  const [texareaValue, setTexareaValue] = useState('');
  const [selectValue, setSelectValue] = useState(['']);
  const [favoritesValue, setFavoritesValue] = useState(false);


const updateLocalStorageOki=(arrayNote)=>{
  localStorage.arrayNote = JSON.stringify(arrayNote);
  setDataNote(arrayNote)
  filterArray(arrayNote, selectCategory)
}

const dateLocalStorageOki = ()=>{
  return dataNote
}

function filterArray(dataNote, selectCategory){
  let dataInNote = dataNote
if (selectCategory === 'All') {
  dataInNote = dataNote.filter((ObjectElem) => ObjectElem.trash !== true);
  setFilterDataNote(dataInNote)
} else {
  if (selectCategory === 'Trash') {
    dataInNote = dataNote.filter((ObjectElem) => ObjectElem.trash === true);
  setFilterDataNote(dataInNote)

  } else {
    if (selectCategory === 'Favorites') {
      dataInNote = dataNote.filter(
        (ObjectElem) =>
          (ObjectElem.favorites === true) & (ObjectElem.trash !== true)
      );
  setFilterDataNote(dataInNote)


    }
  }
}
return dataInNote
}

 

  

function displayOpen(itInputValue, itTexareaValue, itSelectValue, itFavoritesValue){
  setInputValue(itInputValue)
  setTexareaValue(itTexareaValue)
  setSelectValue(itSelectValue)
  setFavoritesValue(itFavoritesValue)
    setDicplay(!onDisplay)
}


  return (
    <Context.Provider value={{
      updateLocalStorageOki, dateLocalStorageOki, filterArray, displayOpen
    }}>
      <div className='main'>
      <Sidebar setSelectCategory={setSelectCategory} />
    <div className="dashboard">
      <div className="top-dashboard-line">
        <button onClick={(e)=>displayOpen("", "", [''], false)} className="add-button">
          <Plus />
        </button>
        <div className="dashboard-tag">
          {ArrayTags.map((ArrayObj, index) => (
            <button key={index} style={{ background: ArrayObj.color }}>
              {ArrayObj.name}
            </button>
          ))}
        </div>
      </div>
      {onDisplay && (<div>
        <СreateNote dataTag={ArrayTags} inputValue={inputValue} texareaValue={texareaValue} selectValue={selectValue} favoritesValue={favoritesValue} setDicplay={setDicplay} onDisplay={onDisplay}/>
      </div>)}
      
      <div>
        <Notes
          data={filterDataNote}
          dataTag={ArrayTags}
          
        />
      </div>
    </div>
    </div>
    </Context.Provider>
  );
}
export default Dashboard;
