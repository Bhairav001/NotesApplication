import axios from "axios";
import * as types from "./action.types.js"


const getMovieDetailsLoading=(payload)=>{
    return{
        type:types.GET_MOVIE_DETAILS_LOADING,
        payload
    }
}

const getMovieDetailsSuccess = (payload) => {
    return {
      type: types.GET_MOVIE_DETAILS_SUCCESS,
      payload,
    };
  };
  
  
  const getMovieDetailsError = (payload) => {
    return {
      type: types.GET_MOVIE_DETAILS_ERROR,
      payload,
    };
  };


  const getMovieDetailsApi=(payload)=>(dispatch)=>{
      dispatch(getMovieDetailsLoading(payload))
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((r)=>dispatch(getMovieDetailsSuccess(r.data)))
      .catch((e)=>dispatch(getMovieDetailsError(e.data)))
  }




  const deleteMovieDetailsLoading = (payload) => {
    return {
      type: types.DELETE_MOVIE_DETAILS_LOADING,
      payload,
    };
  };
  const deleteMovieDetailsSuccess = (payload) => {
    return {
      type: types.DELETE_MOVIE_DETAILS_SUCCESS,
      payload,
    }
 }  
  const deleteMovieDetailsError = (payload) => {
    return {
      type: types.DELETE_MOVIE_DETAILS_ERROR,
      payload,
    };
  };

  const deleteMovieDetailsAPI = (payload) => (dispatch) => {
    dispatch(deleteMovieDetailsLoading(payload));
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${payload}`)
      .then((r) => {
        dispatch(deleteMovieDetailsSuccess(r.data));
      })
      .then(() => {
        dispatch(getMovieDetailsApi());
      })
      .catch((e) => dispatch(deleteMovieDetailsError(e.data)));
  };

  export {getMovieDetailsApi, deleteMovieDetailsAPI}