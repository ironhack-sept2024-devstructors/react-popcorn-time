import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header"
import MovieList from "./components/MovieList";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";

import movies from "./data/movies.json";

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


  const deleteMovie = (movieId) => {
    const newArray = moviesToDisplay.filter(movieObj => {      
      return movieObj.id !== movieId;
    });
    setMoviesToDisplay(newArray);
  }
  

  const createMovie = (movieDetails) => {

    // find out id for the movie that we want to add
    const movieIds = moviesToDisplay.map(movieObj => movieObj.id);
    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1;

    const newMovie = {
      ...movieDetails,
      id: nextId
    }

    const newArray = [newMovie, ...moviesToDisplay];
    setMoviesToDisplay(newArray);
  }

  return (
    <>

      <Header numberOfMovies={moviesToDisplay.length} />

      <AddMovie callbackToCreate={createMovie} />

      <Routes>
        <Route path="/" element={<MovieList moviesToDisplay={moviesToDisplay} callbackToDelete={deleteMovie} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails moviesToDisplay={moviesToDisplay} />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;
