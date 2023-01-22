import React from 'react'
import Book from "./Book"
export default function Category({title,category,updateCategory}) {
  return (


    <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {category.map(book => (
                    <li key={book.id}>
                        <Book data={book} updateCategory={updateCategory}/>
                    </li>
                ))}

            </ol>
        </div>
    </div>
  )
}
