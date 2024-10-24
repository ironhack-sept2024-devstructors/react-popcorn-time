import { useState } from "react";

import Movie from "./Movie";

import movies from "../data/movies.json";


function MovieList(){

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


    const deleteMovie = (movieId) => {
        const newArray = moviesToDisplay.filter( movieObj => {
            return movieObj.id !== movieId;
        });
        
        // moviesToDisplay = newArray; // do not modify state directly

        setMoviesToDisplay(newArray);
    }


    return (
        <section className="MovieList">

            <h2>We currently have {moviesToDisplay.length} movies available</h2>

            {moviesToDisplay.map((movieObj) => {                                
                return (
                    <Movie movieDetails={movieObj} callbackToDelete={deleteMovie} />
                )
            })}
            
        </section>
    );
}

export default MovieList;