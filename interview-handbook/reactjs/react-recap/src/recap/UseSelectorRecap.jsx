import React, { useReducer } from 'react'


const initialState={
    count:0
}
function reducer(state,action){
   switch(action.type){
    case "INCREMENT":
        return{
            count:state.count+1
        }
    case "DECREMENT":
        return{
            count:state.count-1
        } 
    default:
        return state       
   }
}
const UseSelectorRecap = () => {
    const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <div>
        <h3>{state.count}</h3>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>ADD</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>SUB</button>
    </div>
  )
}

export default UseSelectorRecap