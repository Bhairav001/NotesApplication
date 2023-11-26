import React from 'react'
import useCustomHook_A from './useCustomHook_A'

const CustomHook = () => {

    const [count, Increment, Decrement] = useCustomHook_A()
   
  return (
    <div>
        <h3>Learning Custom Function</h3>
        <div>
            {count}
        </div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default CustomHook

/*

1. A custom Hook is a JavaScript function whose name starts with "use"

2. We can use others hooks in custom hooks as well

* why to use Custom Hook...?
to remove the dublicate logic in components and
we can extract that logic custom hook 


*/