import React, { useContext } from 'react'
import { data } from './UseContextReacp'


const UseContextReact_C = () => {
    const nameData = useContext(data)
  return (
    <div>
        {nameData}
    </div>
  )
}

export default UseContextReact_C