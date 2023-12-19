
import TagColor from './functionNote/tagColor';
import DeleteNote from './functionNote/delete';
import FavoritesNote from './functionNote/favorites';
import './notesHtml.css';
import { useContext } from 'react';
import { Context } from '../../Context';
// import AddFavorites from './workNote/addFavorites';

function NotesHtml(props) {
  // const [dataNote, setDataNote] = useState(props.setData);
  // console.log(dataNote);

  const {displayOpen} = useContext(Context)


  function editNote(e) {
    displayOpen(props.title,props.description, [""], props.favorites )
    // console.log(props.title);
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
