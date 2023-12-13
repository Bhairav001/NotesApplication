import React, { useState } from 'react'
import axios from "axios";
const Signup = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    gender:"",
    password:"",
    age:"",
    city:""
  });

  
  function handleChange(e){
    const {name,value} = e.target;
    setFormData((prev)=>({...prev,
        [name]:value
    }))
      
  };


  async function handleSubmit(e){
       e.preventDefault();
       const data = await axios.post("http://localhost:8080/users/register",formData)
       console.log("backendData",data)
       alert(data.data.msg)
      //  console.log(formData)
  }


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder='enter name' value={formData.name} name="name" onChange={handleChange} />
      <input type="text" placeholder='enter email' value={formData.email} name="email" onChange={handleChange} />
      <input type="text" placeholder='enter gender' value={formData.gender} name="gender" onChange={handleChange} />
      <input type="text" placeholder='enter password' value={formData.password} name="password" onChange={handleChange} />
      <input type="number" placeholder='enter age' value={formData.age} name="age" onChange={handleChange} />
      <input type="text" placeholder='enter city' value={formData.city} name="city" onChange={handleChange} />
      <button>Signup</button>
      </form>
    </div>
  )
}

export default Signup