import React from 'react'
import useCustomHookData from './useCustomHookData'

const CustomHookData = () => {
   const [count, Increment, Decrement] = useCustomHookData(0)
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

export default CustomHookData