import { Trash3 } from 'react-bootstrap-icons';
import { Trash3Fill } from 'react-bootstrap-icons';
import { useState, useContext } from 'react';
import { Context } from '../../../Context';

function DeleteNote(props) {
  const { updateLocalStorage, dateLocalStorage } = useContext(Context);
  const [thrashTrue, Settrash] = useState(props.dataTrash);

  function deleteNotes() {
    const arrayDataNote = dateLocalStorage();
    arrayDataNote.map((Object, index) => {
      if (Object.id === props.id) {
        if (Object.trash === true) {
          arrayDataNote.splice(index, 1);
          updateLocalStorage(arrayDataNote);
        } else {
          arrayDataNote[index].trash = true;
          Settrash(true);
          updateLocalStorage(arrayDataNote);
        }
      }
    });
    localStorage.arrayNote = JSON.stringify(arrayDataNote);
  }

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

export default DeleteNote;
