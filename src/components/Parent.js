// No se pueden enviar propiedades de hijo a padre, pero si se pueden enviar funciones
import React, {useState} from 'react';
import Child from './Child'

function Parent(){
  const [word, setWord] = useState('Parent')

  return(
    <div>
      <h1>{word}</h1>
      <Child 
        changeTitle={word => setWord(word)}
      />
    </div>
  )
}

export default Parent