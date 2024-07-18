import React, { useState, useEffect } from 'react';
import '../styles.css';

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data));
    }, []);

    return (
        <div className='movies-grid'>
            {movies.map(m => (
                <div key={m.id} className='movie-card'>
                    <img src={"images/" + m.image} alt={m.title} />
                    <div className='movie-card-info'>
                        <h3 className='movie-card-title'>{m.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
