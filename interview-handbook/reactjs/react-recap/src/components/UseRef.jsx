import React, { useEffect, useState } from 'react'
import {useRef} from "react"
const UseRef = () => {
    // console.log(useRef);
    const refElement = useRef("");
    const [name, setName] = useState("Bhairav");

    console.log(refElement)

    function Reset(){
        setName("")
        refElement.current.focus();
    }

    function handleInput(){
        refElement.current.style.color="blue"
        refElement.current.value="gotam"
    }
    useEffect(()=>{
      console.log("hi")
    },[])
  return (
    <div>
        <h3>Learining UseRef</h3>
        <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={Reset}>Reset</button>
        <button onClick={handleInput}>see color</button>
    </div>
  )
}

export default UseRef;

/*

we can manipulate DOM with useRef - sometimes not use state and props

*/