// import ArrayNotes from '../../../../data.js';
import React, { useState } from 'react';
import NotesHtml from './notesHtml.js';

function Notes(props) {
  // const [thisdataNote, setThisDataNote] = useState(props.data);
  let dataNote = props.data;
  // console.log(dataNote);
  if (props.thisCategory === 'All') {
    dataNote = props.data.filter((ObjectElem) => ObjectElem.trash !== true);
  } else {
    if (props.thisCategory === 'Trash') {
      dataNote = props.data.filter((ObjectElem) => ObjectElem.trash === true);
    } else {
      if (props.thisCategory === 'Favorites') {
        dataNote = props.data.filter(
          (ObjectElem) =>
            (ObjectElem.favorites === true) & (ObjectElem.trash !== true)
        );
        // setDataNotes(notesData)
      }
    }
  }

  // console.log(dataNotes)

  return (
    <div>
      <ul>
        {dataNote.map((ArrayObj, index) => (
          <NotesHtml
            dataTag={props.dataTag}
            id={ArrayObj.id}
            title={ArrayObj.title}
            description={ArrayObj.description}
            tag={ArrayObj.tag}
            trash={ArrayObj.trash}
            favorites={ArrayObj.favorites}
            key={index}
            setdata={props.setData}
            data={props.data}
          />
        ))}
      </ul>
    </div>
  );
}
export default Notes;
