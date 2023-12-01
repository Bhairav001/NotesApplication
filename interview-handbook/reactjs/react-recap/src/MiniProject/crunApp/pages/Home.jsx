import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetailsApi } from '../../../store/action';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {data} = useSelector((state)=>state)
    
    useEffect(()=>{
        if(data.length==0){
            dispatch(getMovieDetailsApi())
        }
    },[dispatch]);
    console.log("data",data)
  return (
    <div>
      <h1>Movie App</h1>
        <div>
           <button onClick={()=>navigate("/dashboard")}>Admin</button>
        </div>
        <div>
           <button onClick={()=>navigate("/movies")}>User</button>
        </div>
    </div>
  )
}

export default Home