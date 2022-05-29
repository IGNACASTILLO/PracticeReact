import React from 'react'
import { useState,createContext } from 'react'

export const FutContext = createContext();


const FutContextProvider = (props) => {

    const [players,setPlayers] = useState([
        {"id":0,"fullName":"Lionel Messi","age":33},
        {"id":1,"fullName":"Karim Benzema","age":32},
        {"id":2,"fullName":"Kylian Mbappe","age":21}
    ])

  return (
    <FutContext.Provider value={players}>
        {props.children}
    </FutContext.Provider>
  )
}

export default FutContextProvider