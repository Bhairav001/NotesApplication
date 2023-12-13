import React, { useState } from 'react'
import axios from "axios";
const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("")
// const [data, setData] = useState([])
function handleLogin(){
    const payload={
      email,
      password
    }
    fetch("http://localhost:8080/users/login",{
      method:"POST",
      body:JSON.stringify(payload),
      headers:{
        "Content-type":"application/json"
      }
    }).then((res)=>res.json())
    .then(res=>{
      console.log("res",res)
      localStorage.setItem("token",res.token)
    })
    .catch(err=>console.log(err))
}
  return (
    <div>
      <input type="email" value={email} placeholder='enter email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" value={password} placeholder='enter password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login