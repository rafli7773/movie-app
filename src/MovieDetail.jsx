import React, { useState, useEffect } from 'react';

function MovieDetail({ match }) {
    const [movie, setMovie] = useState([]);

    const getMovie = async () => {
        const data = await fetch(`http://www.omdbapi.com/?apikey=7791cf18&i=${match.params.id}`);
        const response = await data.json();
        setMovie(response);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className="detail">
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt="" />
            <p>Writer: {movie.Writer}</p>
            <p>Actors: {movie.Actors}</p>
        </div>
    )
}

export default MovieDetail;