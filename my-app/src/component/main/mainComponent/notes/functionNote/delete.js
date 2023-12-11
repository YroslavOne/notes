import { Trash3 } from 'react-bootstrap-icons';
import { Trash3Fill } from 'react-bootstrap-icons';

function DeleteNote(props) {
  function deleteNotes() {
    const dataNote = JSON.parse(localStorage.arrayNote);
    dataNote.map((Object, index) => {
      if (Object.id === props.id) {
        if (Object.trash === true) {
          dataNote.splice(index, 1);
        } else {
          dataNote[index].trash = true;
        }
      }
    });
    localStorage.arrayNote = JSON.stringify(dataNote);
    console.log(dataNote);
    console.log(props.data);
    // props.setDataNote(dataNote);
  }

  // props.setDataNote(dataNote);
  // console.log(dataNote)
  if (props.dataTrash === true) {
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
