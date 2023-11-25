import React, { useState } from 'react'

const UseStateWithArray = () => {
    const [items, setItems] = useState([])

    function addItems(){
        setItems([...items,{
            id:items.length,
            value:"Pen"
        }]);
    }
  return (
    <div>
        <h3>Learining- UseState Hook with Array</h3>
           <ol>
              {
                items.map((item)=>{
                    return <li key={item.id}>
                        {item.value}
                    </li>
                })
              }
           </ol>
           <button onClick={addItems}>ADD Items</button>
    </div>
  )
}

export default UseStateWithArray;

/*
git remote add origin https://github.com/Bhairav001/e-commarce-website.git

*/