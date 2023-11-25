import React, { createContext } from 'react'
import ConextApi_C from './ConextApi_C'

const data = createContext()
const ContextApi = () => {

    const name = "Bhairavnath In Pune City"
  return (
    <div> 
        <h2>Context API learning</h2>
        <data.Provider value={name}>
            <ConextApi_C />
        </data.Provider>
    </div>
  )
}

export default ContextApi;
export {data}
/*
we have hirarchy in prop drilling and we want to access the data from parent to child 

Context API Learning Method;
1. Create Context 
2. Provide
3. Consume

*/