import React, { useCallback, useState } from 'react'
import UseCallback_A from './UseCallback_A';

const UseCallBack = () => {
    const [add, setAdd] = useState(0)
    const [count, setCount] = useState(0)
    const Learining = useCallback(()=>{

    },[count])
  return (
    <div>
        <h3>Learning UseCallback hook</h3>
        <UseCallback_A Learining={Learining} count={count}/>
        <h1>{add}</h1>
        <button onClick={()=>setAdd((add)=>add+1)}>ADD</button>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+2)}>Count</button>
    </div>
  )
}

export default UseCallBack;
/*


useCallback similar to useMemo

useMemo return memorized value

useCallback return memorized funtion



*/





/*

1. increase the enhance the perfomance of application

1. useMemo return memorized value its like useEffect

2. useCallback return memorized function

3. 
*/