import React from 'react'
import { createContext, useState } from 'react'

export const BookContext = createContext();


const BookProvider = (props) => {

    const [books,setBooks] = useState([
      {"id":1,"title":"HarryPotter","price":10},
      {"id":2,"title":"Principito","price":15},
      {"id":3,"title":"Odissey","price":12}
    ])

  return (
    <BookContext.Provider value={books}>
        {props.children}
    </BookContext.Provider>
  )
}

export default BookProvider