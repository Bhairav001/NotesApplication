import React, { createContext } from 'react'
import UseContextHook_C from './UseContextHook_C'

const data = createContext()
const UseContextHookLearn = () => {
  const name ="bhairav"
  return (
    <div>
         <data.Provider value={name}>
            <UseContextHook_C/>
         </data.Provider>
    </div>
  )
}

export default UseContextHookLearn
export {data}