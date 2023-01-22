import React from 'react'
import Category from './Category';
export default function Categories({data,updateCategory}) {

    
    const currentlyReading = data.filter((book) => book.shelf === "currentlyReading");
    const whatToRead = data.filter((book) => book.shelf === "wantToRead");
    const read = data.filter((book) => book.shelf === "read");



  return (
    <div className="list-books-content">
        <Category title="Currently Reading" category={currentlyReading} updateCategory={updateCategory}/>
        <Category title="Want To Read" category={whatToRead} updateCategory={updateCategory} />
        <Category title="Read" category={read} updateCategory={updateCategory} />         
    </div>
  )
}
