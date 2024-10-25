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
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [imgURL, setImgURL] = useState("");

  const deleteMovie = (movieId) => {
    const newArray = moviesToDisplay.filter(movieObj => {      
      return movieObj.id !== movieId;
    });
    setMoviesToDisplay(newArray);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // find out id for the movie that we want to add
    const movieIds = moviesToDisplay.map(movieObj => movieObj.id);
    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1;
    
    // prepare obj with the details about the new movie
    const newMovie = {
      id: nextId,
      title: title,
      year: year,
      rating: rating,
      imgURL: imgURL,
    }

    // prepare the new array of movies
    const newArray = [newMovie, ...moviesToDisplay];

    // update state
    setMoviesToDisplay(newArray);

    // clear form
    setTitle("");
    setYear("");
    setRating("");
    setImgURL("");

  }

  return (
    <>

      <Header numberOfMovies={moviesToDisplay.length} />

      <section className="box">
        <h2>Create your own movie</h2>

        <form onSubmit={handleSubmit}>

          {/* Title */}
          <label>Title:
            <input 
              type="text" 
              name="title" 
              placeholder="The Godfather" 
              value={title} 
              onChange={(e) => { setTitle(e.target.value) }}
            />
          </label>

          {/* Year */}
          <label>Year:
            <input 
              type="number"
              name="year" 
              placeholder="1999" 
              required={true}
              min={1900}
              max={2100}
              value={year} 
              onChange={(e) => { setYear(e.target.value) }}
            />
          </label>


          {/* Rating */}
          <label>Rating:
            <input 
              type="number"
              name="rating" 
              placeholder="9" 
              required={true}
              min={1}
              max={10}
              value={rating}
              onChange={(e) => { setRating(e.target.value) }}
            />
          </label>


          {/* Image URL */}
          <label>Image URL:
            <input 
              type="url"
              name="imgURL" 
              placeholder="https://www.imdb.com/images/godfather.jpg" 
              value={imgURL}
              onChange={(e) => { setImgURL(e.target.value) }}
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
