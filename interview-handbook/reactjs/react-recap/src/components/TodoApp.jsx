import React, { createContext, useContext, useEffect, useState } from 'react'
import { contextData } from './Todo';

const TodoApp = () => {
    // console.log("el",el,todo);
    const [nameData, setnameData] =useState([])
const todoNameData = useContext(contextData)
    // function handleDelete(id){
    //     console.log("ID",id)
    // }
    useEffect(()=>{
        function n(){
            setnameData(todoNameData)
        }
        n()
    },[])
  return (
    <div>
        {/* <h1>{todo}</h1>
        <button onClick={()=>handleDelete(el)}>Delete</button> */}
        {nameData}
    </div>
  )
}

export default TodoApp