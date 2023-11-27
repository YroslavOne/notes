import { Trash3 } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import AddFavorites from './workNote/addFavorites';

function NotesHtml(props) {
  return (
    <li className="notes">
      <div className="notes-text">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="notes-actions">
        <button className="button-notes">
          <Trash3 />
        </button>
        <button className="button-notes" id="hek" onClick={AddFavorites}>
          <Star />
        </button>
      </div>
    </li>
  );
}
export default NotesHtml;
