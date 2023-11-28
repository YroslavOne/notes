import { Trash3 } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { useState } from 'react';
// import AddFavorites from './workNote/addFavorites';

function NotesHtml(props) {

const [title, setTitle] = useState(props.title);

const handleChange = () => {
    setTitle(prompt("Введите телефон:", "   8  9__1112-3-4   5 6 7"));
  };
  return (
    <li className="notes">
      <div className="notes-text">
        <h2 onClick={handleChange} >{title}</h2>
        <p>{props.description}</p>
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
