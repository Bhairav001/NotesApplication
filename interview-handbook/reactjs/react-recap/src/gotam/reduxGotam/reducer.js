import { DECREMENT, INCREMENT } from "./actionTypes"

const initialState={
    count:0
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count:state.count+1
            }
        case DECREMENT:
            return{
                ...state,
                count:state.count-1
            }    
    }
}

export default reducer