import { Trash3 } from 'react-bootstrap-icons';
import { Trash3Fill} from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { StarFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import "./notesHtml.css"
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


let trash = ()=>{
  if(props.trash===true){
return(<button className="button-notes">
<Trash3Fill />
</button>)
  } else {
    return(<button className="button-notes">
<Trash3 />
</button>)
  }
}
let id = props.id
function AddFavorites(heuuuuu){
console.log(heuuuuu)
}

  let favorites = props.favorites;
  const starHtml =()=>{ if (favorites === true){
    return ( <button className="button-notes" id={props.id} onClick={() => this.AddFavorites({id})}>
    <StarFill />
  </button>
  )
  } else {
    return ( <button className="button-notes">
    <Star />
  </button>
  )
  }}
  return (
    <li className="notes">
      <div className="notes-text">
        <h2>{title}</h2>
        <p onClick={handleChange}>  
        {description}</p>
      </div>
      <div className="notes-actions">
        {trash()}
        {starHtml()}
      </div>
    </li>
  );
}
export default NotesHtml;
