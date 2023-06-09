import React from 'react';
import './MoviePopup.css';

const MoviePopup = ({ movie, onClose }) => {
    return (
        <div className="movie-popup">
            <div className="movie-popup-content">
                <button className="close-button" onClick={onClose}>
                    X
                </button>
                <h2>{movie.title}</h2>
                <p>Year: {movie.year}</p>
                <p>Description: {movie.description}</p>
                <p>Director: {movie.director}</p>
                <p>Rating: {movie.rating}</p>
                <p>Genre: {movie.genre}</p>
                <p>Actors: {movie.actors.join(', ')}</p>
                <div className="trailer-container">
                    <a href={movie.trailer} target="_blank" rel="noopener noreferrer">
                        Watch Trailer
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MoviePopup;

