import { Trash3 } from 'react-bootstrap-icons';
import { Trash3Fill } from 'react-bootstrap-icons';
import { Star } from 'react-bootstrap-icons';
import { StarFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import './notesHtml.css';
// import AddFavorites from './workNote/addFavorites';

function NotesHtml(props) {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const handleChange = (event) => {
    // alert(id)
    console.log(event);
    // setDescription(e.target)
    // setTitle(id);
  };

  let trash = () => {
    if (props.trash === true) {
      return (
        <button className="button-notes">
          <Trash3Fill />
        </button>
      );
    } else {
      return (
        <button className="button-notes">
          <Trash3 />
        </button>
      );
    }
  };

  let favorites = props.favorites;
  const starHtml = () => {
    if (favorites === true) {
      return (
        <button className="button-notes">
          <StarFill />
        </button>
      );
    } else {
      return (
        <button className="button-notes">
          <Star />
        </button>
      );
    }
  };

  let arrayDataTag = [];
  // const dataTag = props.dataTag;

  // const arrayColorDataTag = () => {
  // let arrayColorTag = tagColor();
  //   arrayColorTag.map((elementColorTag) => (
  //     <div style={{ background: elementColorTag }}>1</div>
  //   ));
  // };

  let tagColor = () => {
    props.tag.map((tagObj) => arrayDataTag.push(filterDataTeg(tagObj)));
    console.log(arrayDataTag);
    return arrayDataTag;
  };

  function filterDataTeg(ElemTagObj) {
    const paramDataTag = props.dataTag.filter((tag) => tag.name === ElemTagObj);
    const colorDataTag = paramDataTag[0].color;
    return colorDataTag;
  }

  return (
    <li className="notes">
      <div className="line-tags">
        {tagColor().map((elementColorTag) => (
          <div style={{ background: elementColorTag }}>1</div>
        ))}
        {/* {props.tag.map((tagObj, index) => (
          <div style={{ background: tagObj}}>{tagObj}</div>
        ))} */}
      </div>
      <div className="notes-text">
        <h2>{title}</h2>
        <p onClick={handleChange}>{description}</p>
      </div>
      <div className="notes-actions">
        {trash()}
        {starHtml()}
      </div>
    </li>
  );
}
export default NotesHtml;
