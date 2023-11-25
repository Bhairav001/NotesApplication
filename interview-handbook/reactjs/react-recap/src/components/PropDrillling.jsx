import React from 'react'
import PropChildA from './PropChildA'

const PropDrillling = () => {
    const name = "Bhairavnath Gotam"
  return (
    <div>
        <h1>Learining PropDrilling</h1>
         <PropChildA name={name}/>
    </div>
  )
}

/*
How to avoid propdrilling

//we have problem prop-drilling 

quick reacap of props


what is Prop Drilling

  Parent

  Child- A

  Child - B

  Child - C

  Child - D

  i want to transfer to data in Child- C 


  we can avoid prop drilling with the help of context api
  
*/
export default PropDrillling