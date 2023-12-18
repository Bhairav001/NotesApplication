import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: '',
    age: '',
    city: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/users/register', formData);
      console.log('backendData', response.data);
      alert(response.data.msg);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <input
          type="text"
          placeholder="Enter name"
          value={formData.name}
          name="name"
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Enter email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Enter gender"
          value={formData.gender}
          name="gender"
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Enter age"
          value={formData.age}
          name="age"
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Enter city"
          value={formData.city}
          name="city"
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
