import React from 'react';
import BookList from './components/BookList'; // Correct path according to your file structure
import AddBook from './components/AddBook'; // Same as above
import './App.css'; // Ensure this points to the correct location of your App.css file

function App() {
  return (
    <div className="App">
      <h1>PaceMark - Your Reading Tracker</h1>
      <AddBook />
      <BookList />
    </div>
  );
}

export default App;
