import { App } from 'react-bootstrap-icons';

function deleteNote(elem) {
  console.log(elem);

  const dataNote = JSON.parse(localStorage.arrayNote);
  dataNote.map((Object, index) => {
    if (Object.id === elem) {
      if (Object.trash === true) {
        dataNote.splice(index, 1);
      } else {
        dataNote[index].trash = true;
      }
    }
  });
  localStorage.arrayNote = JSON.stringify(dataNote);
  // console.log(dataNote)
}
export default deleteNote;