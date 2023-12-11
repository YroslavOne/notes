import { Trash3 } from 'react-bootstrap-icons';
import { Trash3Fill } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { StarFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import TagColor from './functionNote/tagColor';
import deleteNote from './functionNote/delete'
import './notesHtml.css';
// import AddFavorites from './workNote/addFavorites';

function NotesHtml(props) {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const handleChange = (event) => {
    // alert(id)
    console.log(event);
    // setDescription(e.target)
    // setTitle(id);
  };

  let trash = () => {
    if (props.trash === true) {
      return (
        <button onClick={(e)=>deleteNote(props.id)} className="button-notes">
          < Trash3Fill  />
        </button>
      );
    } else {
      return (
        <button onClick={(e)=>deleteNote(props.id )} className="button-notes">
          <Trash3 />
        </button>
      );
    }
  };

  let favorites = props.favorites;
  const starHtml = () => {
    if (favorites === true) {
      return (
        <button className="button-notes">
          <StarFill />
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

  function editNote(e){
    console.log(title)
    console.log(description)
    console.log(props.tag)
    console.log(props.id)
    console.log(props.favorites)
  }


  return (
    <li  className="notes">
      <TagColor tag={props.tag} dataTag={props.dataTag}/>
      <div className='notes-group'>
      <div onClick={(e)=>editNote(e.target.value)} className="notes-text">
        <h2>{title}</h2>
        <p >{description}</p>
      </div>
      <div className="notes-actions">
        {trash()}
        {starHtml()}
      </div>
      </div>
    </li>
  );
}
export default NotesHtml;
