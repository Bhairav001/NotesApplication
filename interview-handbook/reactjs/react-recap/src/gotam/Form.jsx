import React, { useEffect, useState } from 'react'

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const [data, setData] = useState([]);
    function handleSubmit(){
         setData((prev)=>[...prev,{
            email:email,
            password:password
         }])
         setEmail("")
         setPassword("")
    }
    console.log(data);
    
    useEffect(()=>{
          let newData= JSON.parse(localStorage.getItem("myData"))||[]
          setData(newData)
    },[])
    useEffect(()=>{
        localStorage.setItem("myData",JSON.stringify(data))
    },[data])
  return (
    <div>
        <input type="text" placeholder='enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>SUBMIT</button>
        <div>
            {
                data.map((el)=>(
                    <div key={el.id}>
                         <h3>{el.email}</h3>
                         <h5>{el.password}</h5>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Form