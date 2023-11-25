import React from 'react'
import PropChildB from './PropChildB'

const PropChildA = ({name}) => {
    console.log("name",name)
  return (
    <div>
        <h1>Child-A Component</h1>
        <PropChildB name={name}/>
    </div>
  )
}

export default PropChildA