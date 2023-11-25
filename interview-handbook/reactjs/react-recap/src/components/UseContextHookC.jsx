import React, { useContext } from 'react'
import {nameData, genderData} from "./UseContextHook";

const UseContextHookC = () => {
    const name= useContext(nameData);
    const gender = useContext(genderData);
  return (
    <div>
        <h1>Hi my name is {name} and my gender is {gender}</h1>
    </div>
  )
}

export default UseContextHookC