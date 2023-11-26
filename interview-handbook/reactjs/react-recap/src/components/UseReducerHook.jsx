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
const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h3>UseReducer</h3>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>ADD</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>SUB</button>
    </div>
  )
}

export default UseReducerHook