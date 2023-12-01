import React, { useMemo, useState } from 'react'

const UseMemoGotam = () => {
    const [add, setAdd]= useState(1)
    const [dec, setDec] = useState(100)

    const multiplication = useMemo( function multiply(){
        console.log("*****************")
        return add*10;
    },[add])
  return (
    <div>
        <div>{multiplication}</div>
        <h3>{add}</h3>
        <button onClick={()=>setAdd(add+1)}>ADD</button>
        <h3>{dec}</h3>
        <button onClick={()=>setDec(dec-10)}>DEC</button>
    </div>
  )
}

export default UseMemoGotam