import React, { useState } from 'react'

const ControlledAndUncontrolled = () => {

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    const handleChange = (e) =>{
       console.log(e.target.name);
       if(e.target.name=="Firstname"){
        const capName = (e.target.value).toUpperCase();
        setName(capName)
       }else{
        setPass(e.target.value)
        console.log(e.target.value)
       }
    }
  
  return (
    <div>
        <h3>Learning Controlled And Uncontrolled Component</h3>
         <form>
            <label>First Name: </label>
            <input type="text" name='Firstname' value={name} onChange={handleChange}/><br />
            <label>Password: </label>
            <input type="text" name='password' value={pass} onChange={handleChange}/>
         </form>
    </div>
  )
}

export default ControlledAndUncontrolled;

/*
Forms - how form behave
HTML FORM 
React FORM

COntrolled-components - we can controlled with the help  of react
react input we controlled with the help of ourself.
recommanded with controlled components.
1. controlled componenent controlled by by react, we can use event-handler, useState hook 
2. uncontrolled componenet is controlled by DOM, use UseRef
name,value,ref - attribute;





un-controlled component - not controlled by react, it controlled by DOM
not read event-handler
use useRef in un-controlled 
*/