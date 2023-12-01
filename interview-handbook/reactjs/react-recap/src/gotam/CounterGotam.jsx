import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './reduxGotam/action';

const CounterGotam = () => {
    const count = useSelector((store)=>store.count);
    const dispatch = useDispatch()
  return (
    <div>
         <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>ADD</button>
        <button onClick={()=>dispatch(decrement())}>SUB</button>
    </div>
  )
}

export default CounterGotam