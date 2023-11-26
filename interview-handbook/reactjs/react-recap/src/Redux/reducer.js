import { buy_book } from "./actionTypes"

const initialState={
    NumberOfBooks:20
}

const BookReducer =(state=initialState,action)=>{
      switch(action.type){
        case buy_book:
            return{
                ...state, NumberOfBooks:state.initialState-1
            }
      }
}

/*
1. Reducer decided how the state of application of changes depending upon the action send to the store
2. Reducers are the function that accepts state and actions as parameter and return the next state of the application

(previousState, action)=>newState


*/