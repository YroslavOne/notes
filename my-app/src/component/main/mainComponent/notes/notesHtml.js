import { Trash3 } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { useState } from 'react';
// import AddFavorites from './workNote/addFavorites';

function NotesHtml(props) {

const [title, setTitle] = useState(props.title);
const [description, setDescription] = useState(props.description);

const handleChange = (event) => {
  // alert(id)
  console.log(event)
  // setDescription(e.target)
    // setTitle(id);
  };
  return (
    <li className="notes">
      <div className="notes-text">
        <h2>{title}</h2>
        <p onClick={handleChange}>  
        {description}</p>
      </div>
      <div className="notes-actions">
        <button className="button-notes">
          <Trash3 />
        </button>
        <button className="button-notes">
          <Star />
        </button>
      </div>
    </li>
  );
}
export default NotesHtml;
