import React, { useState, useEffect } from 'react';

// Correctly define fetchBooks outside of the BookList component
async function fetchBooks() {
    try {
        const response = await fetch('http://localhost:5000/books'); // Update this URL to your actual backend endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];  // Return an empty array in case of error
    }
}

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const fetchedBooks = await fetchBooks();
      setBooks(fetchedBooks);
    };

    getBooks();
  }, []); // The empty array means this runs once when the component mounts

  return (
    <ul className="book-list">
      {books.map(book => (
        <li key={book.id} className="book-item">{book.title} by {book.author}</li>
      ))}
    </ul>
  );
}

export default BookList;
