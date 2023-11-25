import React, { useState } from 'react'

const UseStateWithObject = () => {
  const [allValues, setAllValues] = useState({
    firstName:"Bhairav",
    lastName:"Gotam"
  });

function update(){
    // console.log("Server");
    setAllValues({...allValues, lastName:"patil"},)
}
  return (
    <div>
        <h3>Learining - UseState with Object</h3>
        <h1>First Name is {allValues.firstName} and Last Name is {allValues.lastName}</h1>
        <button onClick={update}>Update</button>
        <div>
            hello
        </div>
        <div>
            name
        </div>
    </div>
  )
}

export default UseStateWithObject


//aman kumar morya, Aakarsh patel, Sanket prabharkar vankhede, Ankit Kolhe, Rohit Singh