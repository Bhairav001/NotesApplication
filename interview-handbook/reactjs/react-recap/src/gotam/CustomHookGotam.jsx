import React, { useState } from 'react'
import useCustomHookGotam_C from './useCustomHookGotam_C'

const CustomHookGotam = () => {
    const [add,dec,handleAdd,handleDec] = useCustomHookGotam_C(0)
  return (
    <div>
          <h3>{add}</h3>
        <button onClick={handleAdd}>ADD</button>
        <h3>{dec}</h3>
        <button onClick={handleDec}>DEC</button>
    </div>
  )
}

export default CustomHookGotam