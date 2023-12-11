import React from 'react'
import "../App.css"
import { IoClose } from "react-icons/io5";

const Form = ({handleSubmit,handleOnChange,handleClose,rest}) => {
  return (
    <div className="addContainer">
    <form onSubmit={handleSubmit}>
    <div className="close-btn" onClick={handleClose}>
    <IoClose />
    </div>
     <label>Name: </label>
     <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name}/>
       
     <label>email: </label>
     <input type="email" id="email" name="email" onChange={handleOnChange} value={rest.email}/>

     <label>Mobile: </label>
     <input type="text" id="mobile" name="mobile" onChange={handleOnChange} value={rest.mobile}/>


     <button className="submit-btn">Submit</button>
    </form>
 </div>
  )
}

export default Form