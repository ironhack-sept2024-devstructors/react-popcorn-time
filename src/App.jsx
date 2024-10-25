import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header"
import MovieList from "./components/MovieList";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import MovieDetails from "./components/MovieDetails";

import movies from "./data/movies.json";

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  
  const [title, setTitle] = useState("");

  const deleteMovie = (movieId) => {
    const newArray = moviesToDisplay.filter(movieObj => {
      return movieObj.id !== movieId;
    });
    setMoviesToDisplay(newArray);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // prepare obj with the details about the new movie
    const newMovie = {
      title: title
    }

    // prepare the new array of movies
    const newArray = [newMovie, ...moviesToDisplay];

    // update state
    setMoviesToDisplay(newArray);

    // clear form
    setTitle("");

  }

  return (
    <>

      <Header numberOfMovies={moviesToDisplay.length} />

      <section className="box">
        <h2>Create your own movie</h2>

        <form onSubmit={handleSubmit}>

          <label>Title:
            <input 
              type="text" 
              name="title" 
              placeholder="The Godfather" 
              value={title} 
              onChange={(e) => { setTitle(e.target.value) }}
            />
          </label>

          <button>Create</button>
        </form>

      </section>

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
