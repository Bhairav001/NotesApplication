import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [add, setAdd] = useState(0)
    const [minus, setMinus] = useState(100)

    const multiplication = useMemo(()=>{
        console.log("****************")
        return add*10
    },[add])
  return (
    <div>
        <h3>Learning UseMemo Hook...</h3>
        <h1>{multiplication}</h1>
        <h2>{add}</h2>
        <button onClick={()=>setAdd((add)=>add+1)}>ADD</button>
        <h2>{minus}</h2>
        <button onClick={()=>setMinus((minus)=>minus-10)}>SUB</button>
    </div>
  )
}

export default UseMemoHook