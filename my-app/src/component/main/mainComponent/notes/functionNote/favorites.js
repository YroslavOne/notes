import { Star } from 'react-bootstrap-icons';
import { StarFill } from 'react-bootstrap-icons';
import { useState } from 'react';


function FavoritesNote(props){

    const [starTrue, setStarTrue] = useState(props.dataFavorites)
    function favoritesNotes() {
        
        const arrayDataNote = JSON.parse(localStorage.arrayNote);
        arrayDataNote.map((Object, index) => {
          if (Object.id === props.id) {
            if (Object.favorites === true) {
                arrayDataNote[index].favorites = false;
                setStarTrue(false)

                
            } else {
                arrayDataNote[index].favorites = true;
                setStarTrue(false)
            }
          }
        });
    }



    // let favorites = props.favorites;
    
      if (starTrue === true) {
        return (
          <button onClick={(e)=>favoritesNotes()} className="button-notes">
            <StarFill/>
          </button>
        );
      } else {
        return (
          <button onClick={(e)=>favoritesNotes()} className="button-notes">
            <Star />
          </button>
        );
      }
}


export default FavoritesNote