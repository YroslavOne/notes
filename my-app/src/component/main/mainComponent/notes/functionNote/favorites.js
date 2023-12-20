import { Star } from 'react-bootstrap-icons';
import { StarFill } from 'react-bootstrap-icons';
import { useState, useContext } from 'react';
import { Context } from '../../../Context';

function FavoritesNote(props) {
  const { updateLocalStorage, dateLocalStorage } = useContext(Context);
  const [starTrue, setStarTrue] = useState(props.dataFavorites);
  function favoritesNotes() {
    const arrayDataNote = dateLocalStorage();
    arrayDataNote.map((Object, index) => {
      if (Object.id === props.id) {
        if (Object.favorites === true) {
          arrayDataNote[index].favorites = false;
          setStarTrue(false);
        } else {
          arrayDataNote[index].favorites = true;
          setStarTrue(true);
        }
      }
    });
    updateLocalStorage(arrayDataNote);
  }

  if (starTrue === true) {
    return (
      <button onClick={(e) => favoritesNotes()} className="button-notes">
        <StarFill />
      </button>
    );
  } else {
    return (
      <button onClick={(e) => favoritesNotes()} className="button-notes">
        <Star />
      </button>
    );
  }
}

export default FavoritesNote;
