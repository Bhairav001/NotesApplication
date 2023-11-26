import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../reduxRecap/action'

const ReduxCounter = () => {
  const count = useSelector((store)=>store.count)
  // console.log(count)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>Inc</button>
      <button onClick={()=>dispatch(decrement())}>Dec</button>
    </div>
  )
}

export default ReduxCounter