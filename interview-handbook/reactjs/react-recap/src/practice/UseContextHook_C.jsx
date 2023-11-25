import React, { useContext } from 'react'
import { data } from './UseContextHookLearn'


const UseContextHook_C = () => {
    const name = useContext(data)
  return (
    <div>{name}</div>
  )
}

export default UseContextHook_C