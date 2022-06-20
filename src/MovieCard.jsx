import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img key={movie.imdbID}
                    src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/404' : movie.Poster} 
                    alt={movie.Title} 
                />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard