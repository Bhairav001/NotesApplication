import React, { useEffect, useState } from 'react'

const CrudApp = () => {
    const [todo, setTodo] = useState("");

    const [data, setData] = useState([]);
    const [nextId, setNextId] = useState(1);
    function handleAdd(){
    //    const id = todo.length+1;
       setData((prev)=>[...prev,{
        // id:id,
        id:nextId,
        todos:todo
       }])
       setNextId((prevId)=>prevId+1);
       setTodo("")
    }
    // console.log("data",data)

    function handleDelete(id){
    //    console.log(id)
    const deletedData = data.filter((prev)=>prev.id!==id);
         setData(deletedData)
    }
    const handleUpdate=(id,updatedTodo)=>{
        const updatedData = [...data]
        const finalUpdatedTodo = updatedData.find((prev)=>prev.id==id);
        finalUpdatedTodo.todos=updatedTodo;
        setData(updatedData)
    }
    useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem('todoData')) || [];
        setData(storedData);
        if (storedData.length > 0) {
          // Set nextId to the highest id + 1
          setNextId(Math.max(...storedData.map((item) => item.id)) + 1);
        }
    },[])
    useEffect(()=>{
        localStorage.setItem("todoData",JSON.stringify(data))
    },[data])
  return (
    <div>
        <input type="text" placeholder='Enter Todo...' onChange={(e)=>setTodo(e.target.value)}/>
        <button onClick={handleAdd}>ADD</button>
        <div>
            {
                data.map((el)=>(
                   <div key={el.id}>
                      <h2>{el.todos}</h2>
                      <button onClick={()=>handleDelete(el.id)}>Delete</button><br />
                      <button onClick={()=>handleUpdate(el.id,prompt("Enter New Todo..."))}>Update</button>
                   </div>
                ))
            }
        </div>
    </div>
  )
}

export default CrudApp