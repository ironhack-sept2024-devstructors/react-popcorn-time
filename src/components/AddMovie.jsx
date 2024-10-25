import { useState } from "react";

function AddMovie(props) {

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState("");
    const [imgURL, setImgURL] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // prepare obj with the details about the new movie
        const movieDetails = {
          title: title,
          year: year,
          rating: rating,
          imgURL: imgURL,
        }
    
        props.callbackToCreate(movieDetails);
    
        // clear form
        setTitle("");
        setYear("");
        setRating("");
        setImgURL("");
    
      }

    return (
        <section className="AddMovie box">
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
    );
}

export default AddMovie;