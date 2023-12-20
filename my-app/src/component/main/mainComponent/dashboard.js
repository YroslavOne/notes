import Notes from './notes/notes';
import СreateNote from './notes/functionNote/createNote';
import './dashboard.css';
import ArrayTags from '../../../dataTag';
import ArrayNotes from '../../../data.js';
import { useState } from 'react';
import { Plus } from 'react-bootstrap-icons';
import { Context } from '../Context';
import Sidebar from './sidebar';
import { v4 as uuidv4 } from 'uuid';

function Dashboard() {
  if (localStorage.arrayNote) {
  } else {
    localStorage.arrayNote = JSON.stringify(ArrayNotes);
  }
  let dataNotes = JSON.parse(localStorage?.arrayNote);

  const [dataNote, setDataNote] = useState(dataNotes);
  const [filterDataNote, setFilterDataNote] = useState(dataNotes);
  const [onDisplay, setOnDisplay] = useState(false);
  const [selectCategory, setSelectCategory] = useState('All');
  const [valueSearch, setValueSearch] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [itId, setItId] = useState('');
  const [selectValue, setSelectValue] = useState(['']);
  const [favoritesValue, setFavoritesValue] = useState(false);
  const [selectTag, setSelectTag] = useState("All")

  const updateLocalStorage = (arrayNote) => {
    localStorage.arrayNote = JSON.stringify(arrayNote);
    setDataNote(arrayNote);
    filterArray(arrayNote, selectCategory, valueSearch, selectTag);
  };

  const dateLocalStorage = () => {
    return dataNote;
  };


function activeTag(value){
  if (selectTag===value){
    setSelectTag("All")
    filterArray(dataNote, selectCategory, valueSearch, "All")
  } else{
    setSelectTag(value)
    filterArray(dataNote, selectCategory, valueSearch, value)
  }
}

  function filterArray(dataNote, selectCategory, valueSearch, selectTag) {

    let FilterInTagDataNote = ()=>{
      let thisFilterTagDataNote = []
      if(selectTag!=="All"){
        dataNote.map((Object)=>{
          let truePut = false
          Object.tag.map((tagElem)=>
          { if(selectTag===tagElem){
            truePut = true
            return
          }})
          if(truePut===true){
            thisFilterTagDataNote.push(Object)
          }
        })
       
        
      } else {
        thisFilterTagDataNote = dataNote
      }
      return thisFilterTagDataNote
    }
    console.log(FilterInTagDataNote())


    let filterDataNotes
    const thisFilterDataNote = () => {
      if(valueSearch!==""){
      filterDataNotes = FilterInTagDataNote().filter((Object)=>Object.title.includes(valueSearch))
      console.log(filterDataNotes)
      return filterDataNotes
    } else{
      filterDataNotes = FilterInTagDataNote()
      return filterDataNotes

    }}
    
    let dataInNote = thisFilterDataNote();
    
    if (selectCategory === 'All') {
      dataInNote = thisFilterDataNote().filter((ObjectElem) => ObjectElem.trash !== true);
      console.log(dataInNote)
      setFilterDataNote(dataInNote);
    } else {
      if (selectCategory === 'Trash') {
        dataInNote = thisFilterDataNote().filter((ObjectElem) => ObjectElem.trash === true);
        setFilterDataNote(dataInNote);
      } else {
        if (selectCategory === 'Favorites') {
          dataInNote = thisFilterDataNote().filter(
            (ObjectElem) =>
              (ObjectElem.favorites === true) & (ObjectElem.trash !== true)
          );
          setFilterDataNote(dataInNote);
        }
      }
    }
    return dataInNote;
  }

  function displayOpen(
    itInputValue,
    itTextareaValue,
    itSelectValue,
    itFavoritesValue,
    itId
  ) {
    setInputValue(itInputValue);
    setTextareaValue(itTextareaValue);
    setSelectValue(itSelectValue);
    setFavoritesValue(itFavoritesValue);
    setItId(itId);
    setOnDisplay(!onDisplay);
  }

  return (
    <Context.Provider
      value={{
        updateLocalStorage,
        dateLocalStorage,
        filterArray,
        displayOpen,
      }}
    >
      <div className="main">
        <Sidebar selectTag={selectTag} setSelectCategory={setSelectCategory} setValueSearch={setValueSearch} />
        <div className="dashboard">
          <div className="top-dashboard-line">
            <button
              onClick={(e) => displayOpen('', '', [''], false, uuidv4())}
              className="add-button"
            >
              <Plus />
            </button>
            <div className="dashboard-tag">
              {ArrayTags.map((ArrayObj, index) => (
                <button key={index} onClick={(e)=> activeTag(ArrayObj.name)} style={{ background: ArrayObj.color }}>
                  {ArrayObj.name}
                </button>
              ))}
            </div>
          </div>
          {onDisplay && (
            <div>
              <СreateNote
                dataTag={ArrayTags}
                itId={itId}
                inputValue={inputValue}
                textareaValue={textareaValue}
                selectValue={selectValue}
                favoritesValue={favoritesValue}
                setOnDisplay={setOnDisplay}
                onDisplay={onDisplay}
              />
            </div>
          )}

          <div>
            <Notes
              data={filterDataNote}
              dataTag={ArrayTags}
              setOnDisplay={setOnDisplay}
            />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}
export default Dashboard;
