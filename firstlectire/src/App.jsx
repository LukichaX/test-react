import "./app.css";
import Card from "./Card";
import { useState, useEffect } from "react";


const movies = [
  {
    title: "garry poder",
    length: "2:30",
    rating: 9.9,
    img: "https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/uor-wwohp-logo-3-kids-clouds-key-art-hero-b.jpg",
  },
  {
    title: "pacific rim",
    length: "3:110",
    rating: 9.9,
    img: "https://m.media-amazon.com/images/M/MV5BMjI3Nzg0MTM5NF5BMl5BanBnXkFtZTgwOTE2MTgwNTM@._V1_.jpg",
  },
  {
    title: "The Gorge",
    length: "1:57",
    rating: 8.8,
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVhs0zWJkL9afwN2gqJJ3vtmX4yJVAeZchddbahTVkHzCi9fyKtXwj0OEcznWUsFRn_VKd",
  },
];

function App() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("jiznvaram");
  const [newBody, setNewBody] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setPosts(data));
  }, []);

  function handleAddPost(){
    if(newTitle.trim() === "" || newBody.trim() === ""){
      alert("Please fill in all fields");
      return;
    }
    if(newTitle.length < 3){
      alert("Title must be at least 3 characters long");
      return;
    }
    if(newBody.length < 10){
      alert("Body must be at least 10 characters long");
      return;
    }
    const newPost = {
      timestamp: new Date(),
      title: newTitle,
      body: newBody,
    }
    setPosts([newPost, ...posts]);
    setNewTitle("");
    setNewBody("");
    
  }

  return (
    <>
      <div className="post">
        <h2>Add a post</h2>
        {newTitle}
        <br />
        {newBody}
        <br />
        <input type="text" placeholder="title" value={newTitle} onChange={(e)=>{setNewTitle(e.target.value)}}/>
        <br />
        <input type="text" placeholder="body" value={newBody} onChange={(e)=>{setNewBody(e.target.value)}}/>
        <br />
        <button onClick={handleAddPost}>Add new post</button>
      </div>
      <div className="card-container">
        {posts.map((post, i) => (
          <Card
            key={i}
            title={post.title}
            body={post.body}
            id={post.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
