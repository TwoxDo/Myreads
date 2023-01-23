import React from 'react'
import icon from '../icons/1.jpg'


export default function Book({ books, updateCategory }) {



  let urldefault = icon

  return (

    <div className="book">

      <div className="book-top">

        <div className="book-cover"
          style={
            {
              width: 128,

              height: 193,

              backgroundImage:

                `url(${books.imageLinks ? books.imageLinks.thumbnail : urldefault})`
            }
          }>

        </div>
        <div className="book-shelf-changer">
          <select
            defaultValue={books.shelf ? books.shelf : "none"}
            onChange={(e) =>
              updateCategory(books, e.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-authors">
        <h3>Book Title:  </h3>
        
        {books.title},</div>
      {books.authors ?
        <div className="book-authors"><h3> Book Author: </h3> {books.authors.map((auth => `${auth} ,`))}</div>
        : ''}
      {books.publisher ?
        <div className="book-authors"><h3>Book publisher:</h3>  {books.publisher}</div>
        : ''}
    </div>

  )
}
