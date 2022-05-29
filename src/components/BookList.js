import React, { useContext } from 'react'

import { BookContext } from './BookProvider'

export const BookList = () => {

    const books = useContext(BookContext)
  return (
  
    <ul>
        {books.map(book=>{
          return(
            <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.price}</p>
        </li>
          )
        })}

    </ul>
   

  )
}
