import {ArrayNotes} from '../../../../data.js';
import NotesHtml from './notesHtml.js';

function Notes(){
    console.log(ArrayNotes)
    let testElem = ArrayNotes.forEach(element=> <h3>element.description</h3>
    )
    return (
        <div>{testElem}</div>
    )
      
}
export default Notes;