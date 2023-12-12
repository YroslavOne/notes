import { Trash3 } from 'react-bootstrap-icons';
import { Trash3Fill } from 'react-bootstrap-icons';
import { useState } from 'react';

function DeleteNote(props) {
const [thrashTrue, Settrash] = useState(props.dataTrash)
  function deleteNotes() {
    const arrayDataNote = JSON.parse(localStorage.arrayNote);
    arrayDataNote.map((Object, index) => {
      if (Object.id === props.id) {
        if (Object.trash === true) {
            arrayDataNote.splice(index, 1);
            
        } else {
            arrayDataNote[index].trash = true;
            Settrash(true)
        }
      }
    });
    localStorage.arrayNote = JSON.stringify(arrayDataNote);
    console.log(arrayDataNote);
    console.log(props.data);
    props.setData(arrayDataNote)
  }

  // props.setDataNote(dataNote);
  // console.log(dataNote)
  
  
  if (thrashTrue === true) {
    return (
      <button onClick={(e) => deleteNotes(props.id)} className="button-notes">
        <Trash3Fill />
      </button>
    );
  } else {
    return (
      <button onClick={(e) => deleteNotes(props.id)} className="button-notes">
        <Trash3 />
      </button>
    );
  }
}
// return(reternTrash)

export default DeleteNote;
