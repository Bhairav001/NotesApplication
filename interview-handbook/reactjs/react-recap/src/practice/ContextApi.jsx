import React, { createContext } from 'react'
import ContextApi_C from './ContextApi_C';

const data = createContext();
const ContextApi = () => {
    const name = "Masai School in Banglore"
  return (
    <div>
         <h2>Context API learning</h2>
        <data.Provider value={name}>
            <ContextApi_C />
        </data.Provider>
    </div>
  )
}

export default ContextApi
export {data}