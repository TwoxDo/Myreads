import React from 'react'
import * as BooksAPI from '../BooksAPI'
import { useState, useEffect } from "react";
import Book from '../components/Book';
import { Link } from "react-router-dom";

export default function Adding({ books, updateCategory }) {
    const [term, setTerm] = useState("");
    const [search, setSearch] = useState([]);
    useEffect(() => {
        const result = async () => {
            if (term) {
                const findingBook = await BooksAPI.search(term)
                if (findingBook.error) {
                    setSearch([])
                } else {
                    findingBook.forEach(findedBook => {

                        books.forEach((Currentbook) => {

                            if (findedBook.id === Currentbook.id) 
                            { findedBook.shelf = Currentbook.shelf 
                            }

                        });

                       
                    })
                    setSearch(findingBook)
                }
            }
        }
        if (term !== "") {
            result();
        } else if (!search.shelf) {
            search.shelf = "none";
        }
        return () => {
            setSearch([]);
        }
    }, [term,books])

    return (

        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search" >
                    </button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        placeholder="Search by title, author, or ISBN"
                        value={term}
                        onChange={(e) => { setTerm(e.target.value) }}
                        type="text"

                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">


                    {search.map(current => (
                        <Book
                            key={current.id}
                            books={current}
                            updateCategory={updateCategory}
                        />
                    ))}
                </ol>
            </div>
        </div>
    )
}
