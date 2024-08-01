import React, { useEffect, useState, createContext } from 'react'

const BookContext = createContext();

// Create the provider component
const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("/books.json")
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(err => console.log(err));
    }, [])
    return (
        <BookContext.Provider value={{ books }}>
            {children}
        </BookContext.Provider>
    );
};

export { BookContext, BookProvider };