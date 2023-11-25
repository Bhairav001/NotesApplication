import React, { createContext } from 'react'
import UseContextHookC from './UseContextHookC';

const nameData = createContext();

const genderData = createContext();
const UseContextHook = () => {
    const name = "Bhairav"
    const gender = "male";


  return (
    <div>
        <h3>Learining UseConext Hook</h3>
        <nameData.Provider value={name}>
            <genderData.Provider value={gender}>
              <UseContextHookC/>
            </genderData.Provider>
        </nameData.Provider>
    </div>
  )
}

export default UseContextHook;
export {nameData,genderData}

/*
i want send the data parent to child C wihtout passing child-A and child-B

1. Create
2. Provider
3. useContext;

*/