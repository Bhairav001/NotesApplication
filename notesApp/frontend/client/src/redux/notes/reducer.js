import { EDIT_NOTE_SUCCESS, GET_NOTES_FAILURE, GET_NOTES_REQUEST, GET_NOTES_SUCCESS, GET_NOTE_FAILURE, GET_NOTE_REQUEST, GET_NOTE_SUCCESS } from "./actionTypes"

const initialState = {
    notes:[],
    isLoading:false,
    isError:false   
}

export const reducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case GET_NOTE_REQUEST:
            return{...state,isLoading:true}
        case GET_NOTE_SUCCESS:
            return{...state, isLoading:false, notes:payload}
        case GET_NOTE_FAILURE:
            return{...state, isLoading:false, isError:true}
        case EDIT_NOTE_SUCCESS:
            return{...state, isLoading:false}            
        default:
            return state
    }
}