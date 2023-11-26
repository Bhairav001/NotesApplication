import React, { useCallback, useState } from 'react'
import UseCallBack_C from './UseCallBack_C'

const UseCallBack = () => {
    const [add, setAdd] = useState(0);
   const [count, setCount] = useState(0)
    const Learining = useCallback(()=>{
        //some operation 
    },[])
  return (
    <div>
        <h2>Learning UseCallback...</h2>
        <UseCallBack_C Learining={Learining} count={count}/>
        <h1>{add}</h1>
        <button onClick={()=>setAdd(add+1)}>Addition</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+2)}>Count</button>
    </div>
  )
}

export default UseCallBack

/*
refreshneal equality
state update hote hai, to function create hote hai to re-render hota hai ui
child component bhi re-render hota hai

*/


/*

useMemo and useCallback are similar, useMemo return memoreized function
useCallback return memorised fuction


*/