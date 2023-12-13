import Notes from './notes/notes';
import СreateNote from './notes/functionNote/createNote';
import './dashboard.css';
import ArrayTags from '../../../dataTag';
import ArrayNotes from '../../../data.js';
import { useState, useEffect } from 'react';
import { Display, Plus } from 'react-bootstrap-icons';

function Dashboard(props) {
  

  if (localStorage.arrayNote) {
  } else {
    localStorage.arrayNote = JSON.stringify(ArrayNotes);
  }
  let dataNotes = JSON.parse(localStorage?.arrayNote);
// function onClickAround(e){
//   setDataNote(JSON.parse(localStorage?.arrayNote));
// }
  useEffect(()=> {
    setDataNote(JSON.parse(localStorage?.arrayNote));
})

  
  const [dataNote, setDataNote] = useState(dataNotes);
const [onDisplay, setDicplay] = useState(false)
function displayOpen(){
    setDicplay(!onDisplay)
}
  return (
    <div className="dashboard">
      <div className="top-dashboard-line">
        <button onClick={(e)=>displayOpen()} className="add-button">
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
        <СreateNote dataTag={ArrayTags} setData={setDataNote} setDicplay={setDicplay} onDisplay={onDisplay}/>
      </div>)}
      
      <div>
        <Notes
          data={dataNote}
          dataTag={ArrayTags}
          thisCategory={props.category}
          setData={setDataNote}
          
        />
      </div>
    </div>
  );
}
export default Dashboard;
