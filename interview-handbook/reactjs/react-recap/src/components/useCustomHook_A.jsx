import React, { useState } from 'react'

const useCustomHook_A = () => {
    const [count, setCount] = useState(0);

    function Increment(){
        setCount(count+1)
    }

    function Decrement(){
        setCount(count-1)
    }

  return [count, Increment, Decrement]
}

export default useCustomHook_A