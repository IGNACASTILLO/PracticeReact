import React from 'react'
import { useContext } from 'react'
import { FutContext } from './FutContextProvider'
import { ThemeContext } from './ThemeProvider'
export const FutList = () => {

    const players = useContext(FutContext)
    
  return (
   
    <ul>
        {players.map(player=>{
            return(
                <li key={player.id}>
                    <h3>{player.fullName}</h3>
                    <h5>EDAD: {player.age}</h5>
                </li>
            )
        
        })}

    </ul>

  )
}

