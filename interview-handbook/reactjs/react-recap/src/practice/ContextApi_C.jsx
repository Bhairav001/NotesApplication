import React from 'react'
import data from "./ContextApi"
const ContextApi_C = () => {
  return (
    <div>
  <data.Consumer>
        {
            (name)=>{
                return(
                    <h1>My Name is {name}</h1>
                )
            }
        }
       </data.Consumer>
    </div>
  )
}

export default ContextApi_C