import React from 'react'

export default function Book({data,updateCategory}) {
  return (
    
    <div className="book">
    <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${data.imageLinks.thumbnail})` }}></div>
        <div className="book-shelf-changer">
            <select defaultValue={data.shelf ? data.shelf : "none"} onChange={(e) => updateCategory(data, e.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    </div>
    <div className="book-title">{data.title}</div>
    <div className="book-authors">{data.publisher}</div>
</div>
  )
}
