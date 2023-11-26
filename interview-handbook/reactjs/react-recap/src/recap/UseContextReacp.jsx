import React, { createContext } from 'react'
import UseContextReact_C from './UseContextReact_C'

const data = createContext()
const UseContextReacp = () => {
    const name = "Masai School"
  return (
    <div>
        <data.Provider value={name}>
            <UseContextReact_C/>
        </data.Provider>
    </div>
  )
}

export default UseContextReacp
export {data}