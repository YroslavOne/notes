// import ArrayNotes from '../../../../data.js';
import React, { useState } from 'react';
import NotesHtml from './notesHtml.js';

function Notes(props) {
  // console.log("heuuu")
  // console.log(props.data)
  // const [dataNotes, setDataNotes] = useState(props.data)
  // const notesData = props.data
  // console.log(props.thisCategory)
  
  let notesData = props.data
    if(props.thisCategory === "All"){
      notesData = props.data.filter(ObjectElem=>ObjectElem.trash !== true)
      // setDataNotes(notesData)
      // console.log(notesData)
    } else { 
      if(props.thisCategory === "Trash"){
        notesData = props.data.filter(ObjectElem=>ObjectElem.trash === true)
        // setDataNotes(notesData)

    } else {
      if (props.thisCategory === "Favorites"){
        notesData = props.data.filter(ObjectElem=>ObjectElem.favorites === true)
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
