
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import * as BooksAPI from './BooksAPI'
import Adding from './pages/Adding';
function App() {

  const [books, setBooks] = useState([])
  useEffect(() => {


    BooksAPI.getAll()
      .then(data => { setBooks(data) });
  }, [])

  const updateCategory = (book, category) => {
    const updatedBooks = books.map(currentbook => {
      if (currentbook.id === book.id) {
        book.shelf = category;
        return book;
      }
      return currentbook;
    })
    setBooks(updatedBooks);
    BooksAPI.update(book, category)

  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <div>
              <Home updateCategory={updateCategory} books={books} />
              <div className="open-search">
                <Link className="open-search" to="/search"></Link>
              </div>
            </div>
          } />
          <Route path='/search' element={
            <Adding books={books}
              updateCategory={updateCategory} />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
