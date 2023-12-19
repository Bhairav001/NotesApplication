import axios from "axios"
import { EDIT_NOTE_SUCCESS, GET_NOTES_FAILURE, GET_NOTES_REQUEST, GET_NOTES_SUCCESS, GET_NOTE_FAILURE, GET_NOTE_REQUEST, GET_NOTE_SUCCESS } from "./actionTypes"

export const getNotesRequestAction = () =>{
    return {type:GET_NOTE_REQUEST}
}

export const getNotesSuccessAction = (payload) =>{
    return {type:GET_NOTE_SUCCESS,payload}
}

export const getNotesFailureAction = () =>{
    return {type:GET_NOTE_FAILURE}
}

const editNoteSuccess = () =>{
  return {type:EDIT_NOTE_SUCCESS}
}

//common are all get request
export const getNotes = (param={})=>(dispatch) =>{
      dispatch(getNotesRequestAction())
      axios.get(`http://localhost:8080/notes`,param).then((res)=>{
        console.log(res)
        dispatch(getNotesSuccessAction(res.data))
      }).catch((err)=>{
        dispatch(getNotesFailureAction())
      })
}

export const editNote =(id,NOTEData) =>(dispatch)=>{
     return axios.patch(`http://localhost:8080/NOTEs/${id}`,NOTEData).then(()=>{
         dispatch(editNoteSuccess())
      })
}
// let obj = {
//   params:{
//     category:["Novel", "Motivational"],
//     _sort:"release_year",
//     _order:"asc"
//   }
// }

//category = "Novel&category=Motivational"