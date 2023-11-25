import React from 'react'
import PropChildC from './PropChildC'

const PropChildB = ({name}) => {
  return (
    <div>
        <h1>Child-B Component</h1>
        <PropChildC name={name}/>
    </div>
  )
}

export default PropChildB