import React from 'react'

const State = () => {
 
    var x=10;
    function updateState(){
        x=15;
        console.log(x)
    }
    console.log("x",x)
  return (
    <div>
        <h1>Learning State: {x}</h1>
        <button onClick={updateState}>Click me</button>
    </div>
  )
}

export default State

/*

1. The State is a build-in React Object that is used to contain Data or information about component
2. A State can be modified based on user action or network changes
3. Everytime when the sate of an object chages, React  re-render the component to the browser

//event handler - onClick
State -avastha, Stithi
my State of mind is good today

State is Object
State Object store data and update the Data
when you want to update variable, function, object then you need State

why we use State

we can store the data inside data
data - object

class components life cycle method to update the state
functional components need hooks to update State

*/