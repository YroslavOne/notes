
import TagColor from './functionNote/tagColor';
import DeleteNote from './functionNote/delete';
import FavoritesNote from './functionNote/favorites';
import './notesHtml.css';
import { useContext } from 'react';
import { Context } from '../../Context';

function NotesHtml(props) {

  const {displayOpen} = useContext(Context)


  function editNote(e) {
    displayOpen(props.title,props.description, props.tag, props.favorites, props.id )
    props.setDisplay(true)
  }

  return (
    <li className="notes" key={props.id}>
      <TagColor tag={props.tag} dataTag={props.dataTag} />
      <div className="notes-group">
        <div  className="notes-text">
          <h2 onClick={(e) => editNote(e.target.value)}>{props.title}</h2>
          <p onClick={(e) => editNote(e.target.value)}>{props.description}</p>
        </div>
        <div className="notes-actions">
          <DeleteNote
            id={props.id}
            dataTrash={props.trash}
            data={props.data}
            setData={props.setData}
          />
          <FavoritesNote
          id={props.id}
          dataFavorites={props.favorites}
          data={props.data}
          />
        </div>
      </div>
    </li>
  );
}
export default NotesHtml;
