import React, { useState } from 'react'

const useCustomHookGotam_C = () => {
    const [add, setAdd]= useState(1)
    const [dec, setDec] = useState(100);

    function handleAdd(){
        setAdd(add+1)
    }

    function handleDec(){
        setDec(dec-10)
    }
  return [add,dec,handleAdd,handleDec]
}

export default useCustomHookGotam_C