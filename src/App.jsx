import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favs from "./pages/Favs";
import MovieDetails from "./pages/MovieDetail";
import Movies from "./pages/Movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/thinking" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
