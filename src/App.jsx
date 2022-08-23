import { useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState({});

  const handleClick = () => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=c33b955b56b34e6ac8cf34064ef78bbf"
    )
      .then((request) => request.json())
      .then((data) => setMovies(data));
  };

  return (
    <>
      <div>
        <h1>Demo - {movies.results?.[0]?.original_name}</h1>
        <button onClick={handleClick}>Click</button>
      </div>
    </>
  );
}

export default App;
