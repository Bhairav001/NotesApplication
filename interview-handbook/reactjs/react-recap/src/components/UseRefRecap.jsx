import React, { useRef, useState } from 'react'

const UseRefRecap = () => {
    const refElement = useRef("");
    const [name, setName] = useState("Bhairav");

    function handleSubmit(){
        setName("")
        refElement.current.focus()
    }
    function handleChange(){
        refElement.current.style.color="blue"
        refElement.current.value="Gotam"
    }
  return (
    <div>
        <input type="text" ref={refElement} value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={handleSubmit}>SUBMIT</button>
        <button onClick={handleChange}>ChnageInput</button>
    </div>
  )
}

export default UseRefRecap