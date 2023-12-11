// import ArrayNotes from '../../../../data.js';
import React, { useState } from 'react';
import NotesHtml from './notesHtml.js';

function Notes(props) {
  let notesData = props.data;
  if (props.thisCategory === 'All') {
    notesData = props.data.filter((ObjectElem) => ObjectElem.trash !== true);
  } else {
    if (props.thisCategory === 'Trash') {
      notesData = props.data.filter((ObjectElem) => ObjectElem.trash === true);
    } else {
      if (props.thisCategory === 'Favorites') {
        notesData = props.data.filter(
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
        {notesData.map((ArrayObj, index) => (
          <NotesHtml
            dataTag={props.dataTag}
            id={ArrayObj.id}
            title={ArrayObj.title}
            description={ArrayObj.description}
            tag={ArrayObj.tag}
            trash={ArrayObj.trash}
            favorites={ArrayObj.favorites}
            key={ArrayObj.key}
          />
        ))}
      </ul>
    </div>
  );
}
export default Notes;
