import React, { useState } from 'react';
import MoviePopup from './MoviePopup';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
    const [popupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className="movie-card">
            <img className="poster" src={movie.poster} alt={movie.title} />
            <div className="info">
                <h2>{movie.title}</h2>
                <p>Year: {movie.year}</p>
                <p>Genre: {movie.genre}</p>
                <p>
                    <a
                        href={movie.trailer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="trailer-link"
                    >
                        Watch Trailer
                    </a>
                </p>
                <div className="more-button-container">
                    <button className="more-button" onClick={openPopup}>
                        More
                    </button>
                </div>
            </div>

            {popupOpen && <MoviePopup movie={movie} onClose={closePopup} />}
        </div>
    );
};

export default MovieCard;
