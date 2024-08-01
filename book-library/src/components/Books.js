import React, { useContext } from "react";
import { BookContext } from "../contexts/BooksContext";


export default function Books() {
    const { books } = useContext(BookContext);

    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.title} by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );

}