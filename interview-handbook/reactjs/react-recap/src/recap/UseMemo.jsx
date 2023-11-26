import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [inc, setInc] = useState(0)
    const [dec, setDec] = useState(100)

    const multiplication = useMemo(function multiply(){
        console.log("***************")
        return inc*10
    },[inc])
  return (
    <div>
         <h3>{inc}</h3>
         <h2>{multiplication}</h2>
        <button onClick={()=>setInc(inc+1)}>INC</button>
        <h3>{dec}</h3>
        <button onClick={()=>setDec(dec-10)}>DEC</button>
    </div>
  )
}

export default UseMemo