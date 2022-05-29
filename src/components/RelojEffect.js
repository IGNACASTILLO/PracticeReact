import React, { useEffect, useState } from 'react'

function Reloj({hora}){
    return <h3 className='title'>{hora}</h3>
}

const RelojEffect = () => {

    const [hora,setHora] = useState(new Date().toLocaleTimeString());
    const [visible,setVisible] = useState(false)

    useEffect(() => {
      let temporizador;
      if(visible){
        temporizador = setInterval(() => {
          setHora(new Date().toLocaleTimeString())
       }, 1000);
      }else{
        clearInterval(temporizador)
      }
      return () => {
        clearInterval(temporizador)
      }
    }, [visible])
    
    

  return (
   <>
    {visible? <Reloj hora={hora}/> :null}
    <div className='conteiner-button'>
    <button className='button' onClick={()=> setVisible(true)}>Mostrar</button>
    <button  className='button'onClick={()=> setVisible(false)}>Sacar</button>
    </div>
   
   
    <hr></hr>
    
   </>
    
  )
}

export default RelojEffect