import { Star } from 'react-bootstrap-icons';
import { StarFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import TagColor from './functionNote/tagColor';
import DeleteNote from './functionNote/delete';
import './notesHtml.css';
// import AddFavorites from './workNote/addFavorites';

function NotesHtml(props) {
  // const [dataNote, setDataNote] = useState(props.setData);
  // console.log(dataNote);

  let favorites = props.favorites;
  const starHtml = () => {
    if (favorites === true) {
      return (
        <button className="button-notes">
          <StarFill/>
        </button>
      );
    } else {
      return (
        <button className="button-notes">
          <Star />
        </button>
      );
    }
  };

  function editNote(e) {
    console.log(props.title);
    console.log(props.description);
    console.log(props.tag);
    console.log(props.id);
    console.log(props.favorites);
  }

  return (
    <li className="notes" onClick={(e)=>console.log(e.target)} key={props.id}>
      <TagColor tag={props.tag} dataTag={props.dataTag} />
      <div className="notes-group">
        <div onClick={(e) => editNote(e.target.value)} className="notes-text">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="notes-actions">
          <DeleteNote
            id={props.id}
            dataTrash={props.trash}
            data={props.data}
            setData={props.setData}
          />
          {starHtml()}
        </div>
      </div>
    </li>
  );
}
export default NotesHtml;
