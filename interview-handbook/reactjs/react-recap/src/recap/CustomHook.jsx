import React from 'react'
import useCustomHookRecap from './useCustomHookRecap'

const CustomHook = () => {
   const [count, Increment, Decrement] = useCustomHookRecap(0)
  return (
    <div>
        <div>
            {count}
        </div>
        <button onClick={Increment}>INC</button>
        <button onClick={Decrement}>DEC</button>
    </div>
  )
}

export default CustomHook