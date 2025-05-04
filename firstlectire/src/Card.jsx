export default function Card(props) {
  function like(title) {
    console.log("liked ", { title });
  }

  return (
    <div className="card">
      <img src={props.img} alt="" className="card-pic" />
      <p className="title">{props.title.toUpperCase()}</p>
      <p>length: {props.length}</p>
      <p>rating {props.rating}/10 </p>
      <button onClick={() => like(props.title)}>Like</button>
    </div>
  );
}
