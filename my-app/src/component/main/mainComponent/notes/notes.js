import NotesHtml from './notesHtml.js';

function Notes(props) {
  return (
    <div>
      <ul>
        {props.data.map((ArrayObj, index) => (
          <NotesHtml
            dataTag={props.dataTag}
            id={ArrayObj.id}
            title={ArrayObj.title}
            description={ArrayObj.description}
            tag={ArrayObj.tag}
            trash={ArrayObj.trash}
            favorites={ArrayObj.favorites}
            key={index} 
            setdata={props.setData}
            data={props.data}
            setOnDisplay={props.setOnDisplay}
          />
        ))}
      </ul>
    </div>
  );
}
export default Notes;
