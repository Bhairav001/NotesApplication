import React, { useState } from 'react'
console.log("uppper",React)
console.log("uppper useState", useState)
const UseState = () => {
  const [count, setCount] = useState(0)
  console.log("count",count)   // variable
  console.log("setCount",setCount) //funtion
  console.log("useState",useState)  //initial value is like funtion
  console.log("react",React)
  function updateCount(){
   setCount((count)=>count+1)
   console.log("counter inside", count);
   console.log("SetCountInside", setCount)
  }
  console.log("updateCount",updateCount)
  return (
    <div>
        <h1>Learning useState</h1>
        <button>Button Clicked: {count} times</button>
        {console.log("counter inside return",count)}
        <button onClick={updateCount}>Click </button>
        {console.log("inReturn")}
        {console.log("onclick",onclick)}
        {/* {console.log("onBuddaClick",onClick)} */}
    </div>
    
  )
}

export default UseState;
console.log("allUseState",UseState)
console.log("End")

/*


1. Must be written inside function component
2. must be import in component.
3. must be call at top leval of component
5. cannot be conditional [if else not write]
6, useState only accept one value
*/



