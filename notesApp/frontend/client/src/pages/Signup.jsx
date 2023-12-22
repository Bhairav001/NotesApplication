import React, { useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: '',
    city: '',
  });
  const navigate = useNavigate()
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }


  console.log("form",formData.name)
  async function handleSubmit(e) {
    e.preventDefault();

    if(formData.name==""||formData.email==""||formData.gender==""||formData.password==""||formData.confirmPassword==""||formData.city==""){
      toast.error("Please enter all details first !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return
    }else{
      if (formData.password.length < 5){
        toast.error("Password should be at least 5 characters long", {
          position: toast.POSITION.TOP_RIGHT,
        });
         return
      }
      if(formData.password !== formData.confirmPassword){
      toast.error("Password and ConfirmPassword do not match", {
        position: toast.POSITION.TOP_RIGHT,
      });
       return
   }
    try {
      // const response = await axios.post('http://localhost:8080/users/register', formData);
      // console.log(response)
      // console.log('backendData', response.data);
      // if(response.status!==200){
      //   const errorData = await response.data;
      //   console.log("errorData",errorData)
      //   if (response.status === 400) {
      //     if(errorData.msg==="User with this email already exists"){
      //       toast.error("User with this email already exists", {
      //         position: toast.POSITION.TOP_RIGHT,
      //       });
      //     }else {
      //       toast.error(`Registration failed: ${errorData.msg}`, {
      //         position: toast.POSITION.TOP_RIGHT,
      //       });
      //   }
      //   }else{
      //     toast.error(`Registration failed: ${errorData.msg}`, {
      //       position: toast.POSITION.TOP_RIGHT,
      //   });
      //   } 
      // }else{
      //   toast.success("Register Sucessfully !", {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
      //   setTimeout(()=>{
      //     navigate("/login")
      //   },2000)
      // }
      const response = await fetch("https://blue-motionless-viper.cyclic.app/users/register", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-type": "application/json"
                }
            });
            console.log(response)
            console.log('backendData', response.data);
            // if (!response.ok) {
            //     const errorData = await response.json();
            //     if (response.status === 400 && errorData.msg === "User with this email already exists") {
            //         // Show alert for existing user
            //         toast.error("User with this email already exists", {
            //            position: toast.POSITION.TOP_RIGHT,
            //       });
            //     } else {
            //         // Show a generic error message for other registration failures
            //         toast.error(`Registration failed: ${errorData.msg}`, {
            //              position: toast.POSITION.TOP_RIGHT,
            //           });
            //     }
            // }
            //  else {
              toast.success("Register Sucessfully !", {
                     position: toast.POSITION.TOP_RIGHT,
                   });
                   setTimeout(()=>{
                     navigate("/login")
                 },2000)
            // }

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Something went wrong!.", {
          position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
  }
  return (
    <div className='flex'>
       <div className="flex items-center justify-center mx-auto">
        <img  src="https://media.istockphoto.com/id/1463013729/photo/online-registration-form-for-modish-form-filling.webp?b=1&s=170667a&w=0&k=20&c=iUOC7YLenExVDT9pfUtJyyIS-dlJvOPyJq1USG4lv5I=" />
      </div>
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
          type="text"
          placeholder="Enter confirmPassword"
          value={formData.confirmPassword}
          name="confirmPassword"
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
        <ToastContainer />
      </form>
    </div>
    </div>
  );
};

export default Signup;
