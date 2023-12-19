import { Star } from 'react-bootstrap-icons';
import { StarFill } from 'react-bootstrap-icons';
import { useState, useContext } from 'react';
import { Context } from '../../../Context';


function FavoritesNote(props) {
  const {updateLocalStorageOki, dateLocalStorageOki} = useContext(Context)
  const [starTrue, setStarTrue] = useState(props.dataFavorites);
  function favoritesNotes() {
    const arrayDataNote = dateLocalStorageOki();
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
    updateLocalStorageOki(arrayDataNote);
  }

  // let favorites = props.favorites;

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
