import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)

    const multiplication = useMemo(function multiply(){
      console.log("***********")
      return add*10
    },[add])
  return (
    <div>
       <h3>{add}</h3>
       {multiplication}
      <button onClick={()=>setAdd((add)=>add+1)}>ADD</button>
       <h3>{minus}</h3>
      <button onClick={()=>setMinus((minus)=>minus-10)}>SUB</button>
    </div>
  )
}

export default UseMemo


/*

useMemo 
in JavaScript concept of Memorisation

function add(a,b){
  return a+b
}

add(5,5)

as a user again we call function with same parameters
in case we use memorisation

first time call kiya, use time O apne cashe or memory mai store kiya

we call this function same parameter this is not re-calculate. this parameter value already save hai, not call again

In react we write un-neccessary function.
function not use but call again and again
*/

