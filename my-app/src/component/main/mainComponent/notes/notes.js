// import ArrayNotes from '../../../../data.js';
import React from 'react';
import NotesHtml from './notesHtml.js';

function Notes(props) {
  console.log("heuuu")
  console.log(props.data)
  let dataNotes = props.data
  return (
    <div>
      <ul>
        {dataNotes.map((ArrayObj, index) => (
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
