import { useState } from "react";
export default function Card(props) {
  const [likeCount, setLikeCount] = useState(1024);

  function increaseLike() {
    console.log(likeCount, "before");
    setLikeCount(likeCount + 1);
    console.log(likeCount, "afterr");
  }

  return (
    <div className="card">
      <img src={props.img} alt="" className="card-pic" />

      <p className="title">{props.title.toUpperCase()}</p>

      <p>length: {props.length}</p>

      <p>rating {props.rating}/10 </p>

      <div className="like-row">
        <button className="button-like" onClick={increaseLike}>
          Like
        </button>
        <span className="like-count">❤️ {likeCount}</span>
      </div>
    </div>
  );
}
