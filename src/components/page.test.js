import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import MoviePopup from './MoviePopup';

test('renders movie title', () => {
    const movie = {
        title: 'Example Movie',
        year: 2022,
        rating: 8.5,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/b/b9/Intouchables.jpg',
        director: 'Olivier Nakache',
        description: 'Філіп дуже багата людина, але внаслідок нещасного випадку його паралізувало',
        genre: 'Comedy/Drama',
        actors: ['François Cluzet', 'Omar Sy'],
        trailer: 'https://youtu.be/34WIbmXkewU'
    };
    render(<MovieCard movie={movie} />);
    const titleElement = screen.getByText(/Example Movie/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders SearchBar component', () => {
    // Визначення мок-функції
    const mockSearchFunction = jest.fn();

    render(<SearchBar onSearch={mockSearchFunction} />);

    // Перевірка, що компонент SearchBar був успішно відображений
    const searchBarElement = screen.getByTestId('search-bar');
    expect(searchBarElement).toBeInTheDocument();

    // Перевірка, що інпут для вводу тексту має правильний placeholder
    const inputElement = screen.getByPlaceholderText(/Enter movie name/i);
    expect(inputElement).toBeInTheDocument();

    // Перевірка, що кнопка має правильний текст
    const buttonElement = screen.getByRole('button', { name: /Find/i });
    expect(buttonElement).toBeInTheDocument();

    // Симуляція кліку на кнопку пошуку і перевірка, що мок-функція була викликана
    fireEvent.click(buttonElement);
    expect(mockSearchFunction).toHaveBeenCalled();
});

test('renders SearchBar component', () => {
    const mockSearchFunction = jest.fn();
    render(<SearchBar onSearch={mockSearchFunction} />);

    const inputElement = screen.getByPlaceholderText('Enter movie name');
    fireEvent.change(inputElement, { target: { value: 'Example Movie' } });

    const formElement = screen.getByTestId('search-bar');
    fireEvent.submit(formElement);

    expect(mockSearchFunction).toHaveBeenCalledWith('Example Movie');
});

test('renders movie title in the heading', () => {
    const movie = {
        title: 'Example Movie',
        year: 2022,
        rating: 8.5,
        description: 'This is an example movie.',
        director: 'John Doe',
        genre: 'Action',
        actors: ['Actor  1', 'Actor  2'],
        trailer: 'https://example.com/trailer',
    };

    render(<MoviePopup movie={movie} onClose={() => { }} />);
    const headingElement = screen.getByRole('heading', { name: /Example Movie/i });
    expect(headingElement).toBeInTheDocument();
});

test('renders movie year', () => {
    const movie = {
        title: 'Example Movie',
        year: 2022,
        rating: 8.5,
        poster: 'https://upload.wikimedia.org/wikipedia/ru/b/b9/Intouchables.jpg',
        director: 'Olivier Nakache',
        description: 'Філіп дуже багата людина, але внаслідок нещасного випадку його паралізувало',
        genre: 'Comedy/Drama',
        actors: ['François Cluzet', 'Omar Sy'],
        trailer: 'https://youtu.be/34WIbmXkewU'
    };
    render(<MovieCard movie={movie} />);
    const yearElement = screen.getByText(/2022/i);
    expect(yearElement).toBeInTheDocument();
});
