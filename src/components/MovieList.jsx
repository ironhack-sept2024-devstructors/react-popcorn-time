import MovieSummary from "./MovieSummary";

function MovieList(props){

    return (
        <section className="MovieList">

            {props.moviesToDisplay.map((movieObj) => {                                
                return (
                    <MovieSummary key={movieObj.id} movieDetails={movieObj} callbackToDelete={props.callbackToDelete} />
                )
            })}
            
        </section>
    );
}

export default MovieList;