import React, { useState, useEffect } from 'react';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Code to fetch books from an API
    fetchBooks().then(data => {
      setBooks(data);
    });
  }, []); // The empty array means this runs once when the component mounts

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>{book.title} by {book.author}</li>
      ))}
    </ul>
  );
}
