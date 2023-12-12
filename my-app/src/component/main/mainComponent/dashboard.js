import Notes from './notes/notes';
import СreateNote from './notes/functionNote/createNote';
import './dashboard.css';
import ArrayTags from '../../../dataTag';
import ArrayNotes from '../../../data.js';
import { useState } from 'react';
import { Plus } from 'react-bootstrap-icons';

function Dashboard(props) {
  

  if (localStorage.arrayNote) {
  } else {
    localStorage.arrayNote = JSON.stringify(ArrayNotes);
  }
  let dataNotes = JSON.parse(localStorage?.arrayNote);


  const [dataNote, setDataNote] = useState(dataNotes);


  return (
    <div className="dashboard">
      <div className="top-dashboard-line">
        <button className="add-button">
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
      <div>
        <СreateNote dataTag={ArrayTags} setData={setDataNote} />
      </div>
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
