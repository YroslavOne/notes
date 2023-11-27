import { Trash3 } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';

function NotesHtml(props){
    let titles = props.title;
    console.log(titles)
    // let descriptions = props.description
    // let tag = props.tag
    // let trash = props.trash
    // let favorites = props.favorites
    return(
        <div className="notes">
            <div className="notes-text">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className="notes-actions">
                <button className='button-notes'><Trash3/></button>
                <button className='button-notes'><Star/></button>
            </div>
        </div>
    )
}
export default NotesHtml