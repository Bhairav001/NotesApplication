import React, { createContext, useEffect, useRef, useState } from 'react'
import TodoApp from './TodoApp';

const contextData = createContext()
const Todo = () => {
    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    const refCurrent = useRef("");

    function handleAdd(){
         refCurrent.current.focus()
         refCurrent.current.style.color="blue";
         const id = data.length+1
          setData((el)=>[...el,{
            todo:input,
            id:id
          }])
          setInput("")
    }

    // useEffect(() => {
    //     const storedData = JSON.parse(localStorage.getItem('todoData')) || [];
    //     setData(storedData);
    //   }, []);

    // useEffect(() => {
    //     localStorage.setItem('todoData', JSON.stringify(data));
    //   }, [data]);

     
// function handleDelete(id){
//     const deletedData = data.filter((el)=>el.id!==id)
//     setData(deletedData)
// }
  return (
    <div>
        <h3>Todo Application....</h3>
        <input ref={refCurrent} value={input} type="text" placeholder='Enter Todo' onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleAdd}>ADD</button>
        <div>
           {
            data.map((el)=>(
              <div key={el.id}>
                <contextData.Provider value={el.todo}>
                 <TodoApp/>
                </contextData.Provider>
              </div>
            ))
           }
        </div>
    </div>
  )
}

export default Todo;
export {contextData}