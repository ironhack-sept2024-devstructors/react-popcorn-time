import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header"
import MovieList from "./components/MovieList";

import movies from "./data/movies.json";

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    const newArray = moviesToDisplay.filter(movieObj => {
      return movieObj.id !== movieId;
    });
    setMoviesToDisplay(newArray);
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />
      <MovieList moviesToDisplay={moviesToDisplay} callbackToDelete={deleteMovie} />
      <Footer />
    </>
  )
}

export default App;
