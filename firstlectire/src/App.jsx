import "./app.css";
import Card from "./Card";
import { useState } from "react";

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
  let i = 1;
  return (
    <div className="card-container">
      {movies.map((movie, i) => (
        <Card
          key={i}
          title={movie.title}
          length={movie.length}
          rating={movie.rating}
          img={movie.img}
        />
      ))}
    </div>
  );
}

export default App;
