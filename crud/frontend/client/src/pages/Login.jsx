import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      })
      .catch((err) => console.log(err));
  }

  return (
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
      </div>
    </div>
  );
};

export default Login;
