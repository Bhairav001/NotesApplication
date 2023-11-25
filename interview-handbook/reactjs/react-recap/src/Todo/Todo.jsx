import React, { useState } from 'react'

const Todo = () => {
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);
    function addActivity(){
    //    setListData([...listData,activity])
    //    console.log(listData)
          setListData((listData)=>{
            const updatedList = [...listData,activity]
            console.log(updatedList)
            return updatedList
          })
    }
    function removeActivity(id){
          //  console.log("id",id)
          
    }
  return (
    <div>
        <h3>Learining Todo List</h3>
        <input type="text" placeholder='enter todo' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button onClick={addActivity}>Add</button>
        <p className='list-heading'>Here is your List: {":)"}</p>
        {
          listData!=[] &&listData.map((data,i)=>{
            return(
              <>
                 <div key={i}>
                    <h3 className='listData'>
                      {data}
                    </h3>
                    <div className='btn-position'>
                      <button onClick={()=>removeActivity(i)}>remove(-)</button>
                    </div>
                 </div>
              </>
            )
          })
        }
    </div>
  )
}

export default Todo