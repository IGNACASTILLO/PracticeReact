import React, {useState}from 'react'

const Contador = () => {

    const [contador, setContador] = useState(0); 


    const sumar = () => setContador(contador+1);
    const restar = () => setContador(contador-1)
    const resetear = () => setContador(0)


  return (
    <>

       <h1 className='title'>{contador}</h1>
       <div className='conteiner-button'>
       <button className='button' onClick={sumar}>+</button>
       <button className='button' onClick={resetear}>RESET</button>
       <button className='button' onClick={restar}>-</button>
      
       </div>
       
   <hr/>
    </>
  )
}

export default Contador