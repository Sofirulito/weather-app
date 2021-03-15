import React from 'react';

function Child(props){
  return(
    <div>
      <h1>Child</h1>
      <button onClick={() => props.changeTitle('Random')}>Clic to change parent title</button>
    </div>
  )
}

export default Child