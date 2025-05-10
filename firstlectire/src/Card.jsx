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
      <p>{props.id}</p>
      <img src={props.img} alt="" className="card-pic" />

      <p className="title">{props.title}</p>

      <div className="movie-info">
        <div className="movie-specs">
          <p className="length">{"Length: " + props.length}</p>
          <p className="rating">{"Rating: " + props.rating}/10</p>
        </div>
        <div>
          <p className="description">
            {props.body}
          </p>
        </div>
      </div>
      

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
