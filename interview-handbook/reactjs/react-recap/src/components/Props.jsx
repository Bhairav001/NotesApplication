import React from 'react'
import Props1 from './Props1'

const Props = () => {
  const name ="Bhairav"
  return ( 
    
    <div>
        <h1>Props</h1>
         <Props1 name={name}/>
    </div>
  )
}

export default Props


/*

1. Props stands for properties
2. Props are use to transfer the data from one components to anather components
3. we can not change props, 
4. Props are read only
5. we can not change value of our properties
6. we can only see props
7. props are function in javascript


  function add(a,b){
    return a+b
  }
  add(5,7)
*/