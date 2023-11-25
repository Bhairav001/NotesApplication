import React, { useState } from 'react'

const LiftingState_C = (props) => {
    const [name, setName] = useState("")

    //function defining
    function handleSubmit(e){
         e.preventDefault();
         props.getData(name)
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default LiftingState_C