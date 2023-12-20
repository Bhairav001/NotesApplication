import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  function handleLogin() {
    const payload = {
      email,
      password,
    };

    fetch('http://localhost:8080/users/login', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('res', res);
        localStorage.setItem('token', res.token);
      //  if(res.token.length>0){
      //   navigate("/crudApp")
      //  }else{
      //   navigate("/login")
      //  }
      toast.success("Login Successfully !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className='flex'>
      <div>
         <img className='object-fill h-50 w-100 ...' src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZXN8ZW58MHx8MHx8fDA%3D" alt="" />
      </div>
    <div className="container mx-auto p-4"> 
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <input
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
        >
          Login
        </button>
        <ToastContainer />
      </div>
    </div>
    </div>
  );
};

export default Login;
