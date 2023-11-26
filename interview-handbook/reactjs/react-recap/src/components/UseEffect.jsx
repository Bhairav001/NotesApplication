import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const[data, setData] = useState("Ram")

    function updateCount(){
        setCount(count+1)
    }
    function updateData(){
        setData("Seeta")
    }
    
   useEffect(()=>{
    console.log("component mounted");
   },[data])

  return (
    <div>
        <h2>Learning useEffect</h2>
        <h1>Button ciicked {count} times</h1>
        <button onClick={updateCount}>Click</button><br />
        <h2>{data}</h2>
        <button onClick={updateData}>Update Data</button>
    </div>
  )
}

export default UseEffect

/*
useEffect use timer function, setTimeout, api
  web-page reload hota hai or render hota to useEffect run hota hai

  component ke under state change hota hai, to useEffect run hota hai
*/