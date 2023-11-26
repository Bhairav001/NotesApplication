import React from 'react'
import { createdData } from './ContextApiRecap'
const ContextApiReact_C = () => {

  return (
    <div>
       <createdData.Consumer>
        {
            (data)=>{
               return(
                <div>{data}</div>
               )
            }
        }
       </createdData.Consumer>
    </div>
  )
}

export default ContextApiReact_C