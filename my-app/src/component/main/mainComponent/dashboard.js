import Notes from './notes/notes';
import СreateNote from './notes/createNote';
import './dashboard.css';
import ArrayTags from '../../../dataTag';
import { useState } from 'react';
import { Plus } from 'react-bootstrap-icons';

function Dashboard(props) {
  const [dataNote, setDataNote] = useState(props.data);
  // const buttonTags = () => {
  //   ArrayTags.map((ArrayObj, index) => (
  //     <button style={{ background: ArrayObj.color }}>ArrayObj.tag</button>
  //   ));
  // };

  return (
    <div className="dashboard">
      <div className="top-dashboard-line">
        <button className="add-button">
          <Plus />
        </button>
        <div className="dashboard-tag">
          {ArrayTags.map((ArrayObj, index) => (
            <button style={{ background: ArrayObj.color }}>
              {ArrayObj.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <СreateNote dataTag={ArrayTags} setData={setDataNote} />
      </div>
      <div>
        <Notes data={dataNote} dataTag={ArrayTags} />
      </div>
    </div>
  );
}
export default Dashboard;
