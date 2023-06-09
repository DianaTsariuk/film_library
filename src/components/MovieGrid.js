import React, { useState } from 'react';
import MovieCard from './MovieCard';
import SortButton from './SortButton';
import SearchBar from './SearchBar';
import moviesData from '../data/movies.json';
import './MovieGrid.css';

function MovieGrid() {
    const [movies, setMovies] = useState(moviesData);
    const [sortOption, setSortOption] = useState('default');
    const [searchQuery, setSearchQuery] = useState('');
    const [showAllMovies, setShowAllMovies] = useState(true);

    const sortMovies = (option) => {
        let sortedMovies = [...movies];

        if (option === 'title') {
            sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
        } else if (option === 'year') {
            sortedMovies.sort((a, b) => b.year - a.year);
        } else if (option === 'rating') {
            sortedMovies.sort((a, b) => b.rating - a.rating);
        }

        setSortOption(option);
        setMovies(sortedMovies);
    };

    const handleSearch = (query) => {
        const filteredMovies = moviesData.filter((movie) =>
            movie.title.toLowerCase().includes(query.toLowerCase())
        );
        setMovies(filteredMovies);
        setSearchQuery(query);
        setShowAllMovies(false);
    };

    const handleReturn = () => {
        setMovies(moviesData); // Відновлюємо список всіх фільмів
        setSearchQuery(''); // Скидаємо значення пошукового запиту
        setShowAllMovies(true); // Змінюємо значення showAllMovies на true
    };

    // Перевірка, чи показуються всі фільми або лише результати пошуку
    const displayedMovies = showAllMovies ? movies : moviesData;
    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <SortButton onChange={sortMovies} />
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            {!showAllMovies && movies.length > 0 && (
                <button className="return-button" onClick={handleReturn}>
                    До всіх фільмів
                </button>
            )}
        </div>

    );
}

export default MovieGrid;
