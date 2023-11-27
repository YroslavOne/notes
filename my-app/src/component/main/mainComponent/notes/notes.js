import ArrayNotes from '../../../../data.js';
import React from 'react';
import NotesHtml from './notesHtml.js';

function Notes() {
  return (
    <div>
      <ul>
        {ArrayNotes.map((ArrayObj) => (
          <NotesHtml
            id={ArrayObj.id}
            title={ArrayObj.title}
            description={ArrayObj.description}
            tag={ArrayObj.tag}
            trash={ArrayObj.trash}
            favorites={ArrayObj.favorites}
            key={ArrayObj.key}
          />
        ))}
      </ul>
    </div>
  );
}
export default Notes;
