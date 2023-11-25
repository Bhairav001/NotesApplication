import React from 'react'
import data from './ContextApi'
const ConextApi_C = () => {
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

export default ConextApi_C