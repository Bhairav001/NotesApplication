import React, { createContext } from 'react'
import ContextApiReact_C from './ContextApiReact_C'

const createdData = createContext()
const ContextApiRecap = () => {
    const data = "Bhairavnath Gotam"
  return (
    <div>
       <createdData.Provider value={data}>
                <ContextApiReact_C/>
       </createdData.Provider>
    </div>
  )
}

export default ContextApiRecap
export {createdData}