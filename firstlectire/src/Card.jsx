import { useState } from "react";

export default function Card(props) {
  const [likeCount, setLikeCount] = useState(100);
  const [isLiked, setIsLiked] = useState(false);

  function like() {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
      setIsLiked(!isLiked);
    } else {
      setLikeCount(likeCount - 1);
      setIsLiked(!isLiked);
    }
  }

  return (
    <div className="card">
      <img src={props.img} alt="" className="card-pic" />

      <p className="title">{props.title.toUpperCase()}</p>

      <p>length: {props.length}</p>

      <p>rating {props.rating}/10 </p>

      <div className="like-row">
        <button className="button-like" onClick={like}>
          {isLiked && <p>❤️</p>}
          {!isLiked && <p>🤍</p>}
        </button>
        <span className="like-count">❤️ {likeCount}</span>
      </div>
    </div>
  );
}
