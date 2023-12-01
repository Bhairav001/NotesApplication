import React, { useState } from 'react'

const Button = () => {
    const [click, setClick] = useState("click");

    
  return (
    <div>
        <button onClick={()=>setClick(click=="click"?"clicked":"click")}>{click}</button>
    </div>
  )
}

export default Button