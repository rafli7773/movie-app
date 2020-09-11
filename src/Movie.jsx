import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Movie() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("avengers")

    const getMovie = async () => {
        const data = await fetch(`http://www.omdbapi.com/?apikey=7791cf18&s=${query}`);
        const response = await data.json();
        setMovies(response.Search);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }

    useEffect(() => {
        getMovie()
    }, [query]);
    return (
        <div>
            <form onSubmit={getSearch}>
                <input type="text" value={search} onChange={updateSearch} />
                <button type="submit">Search</button>
            </form>
            <div className="movie">
                {movies.map(movie => (
                    <div className="movie-list" key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <img src={movie.Poster} alt="" />
                        <Link to={`/movie/${movie.imdbID}`}><p>Detail</p></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movie;