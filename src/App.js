import React from 'react';
import BookingForm from './components/BookingForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Little Lemon</h1>
        <h2>Reserve a Table</h2>
      </header>
      <BookingForm />
    </div>
  );
}

export default App;