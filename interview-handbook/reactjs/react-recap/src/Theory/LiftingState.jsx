import React from 'react'
import LiftingState_C from './LiftingState_C';

const LiftingState = () => {
   
    function getData(data){
        console.log(data)
    }
  return (
    <div>
        <h3>Lifting State - How to data pass parent to child</h3>
         <LiftingState_C getData={getData}/>
    </div>
  )
}

export default LiftingState;


/*
1. pass data from child to parent is called lifting State up 
2. 


*/