import React from 'react'

function PokimonList({pokemon}) {
  return (
    <div>



<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Pokimon Name</th>
   
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>     {
           pokemon.map(p => <div key={p}>{p}</div>)
        }</td>
      
    </tr>
  
  </tbody>
</table>
    </div>
  )
}

export default PokimonList
