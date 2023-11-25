import React, { useEffect, useState } from 'react'
import "./Restration.module.css"
const RegistrationForm = () => {
    const data = {
        name: "",
        email: "",
        password: ""
    }
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);



    useEffect(()=>{
        console.log("Registered");
     },[flag]);

     
    function handleData(e) {
        setInputData({...inputData, [e.target.name]:e.target.value})
       
    }
    console.log({msg:inputData})

    function handleSubmit(e){
       e.preventDefault();
       if(!inputData.name || !inputData.email || !inputData.password){
        alert("All fields are Mandatory");
       }else{
         setFlag(true);
       }
    }
    //use only ek hi bar render help of useEffect [re-render]
   
    return (
        <div>
            <h3>Registration Form -Project</h3>
            <hr />
            <pre>{(flag)?<h2>Hello {inputData.name}, You have Registered Successfully</h2>:""}</pre>
            <form action="" className='container' onSubmit={handleSubmit}>
                <div className='header'>1
                    <h1>Resitration Form</h1>
                </div>
                <div >
                    <input type="text" placeholder='Enter Your Name'  name='name' value={inputData.name} onChange={handleData} />
                </div>
                <div >
                    <input type="text" placeholder='Enter Your Email' name='email' value={inputData.email} onChange={handleData}   />
                </div>
                <div >
                    <input type="text" placeholder='Enter Your Passoword'name='password' value={inputData.password} onChange={handleData}   />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm