import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetailsApi } from '../../../store/action';

const Movies = () => {
    const dispatch = useDispatch();
    const {data} = useSelector((state)=>state)

    useEffect(()=>{
        if(data.length==0){
            dispatch(getMovieDetailsApi())
        }
    },[data])
    console.log("datadfdsfd",data)
  return (
    <div>
        <h2>ALl Movies...</h2>
        <div>
            {
                data && data.length>0 &&
                data.map((el,id)=>(
                    <table key={el.id} border={1}>
                        <thead>
                             <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Body</th>
                             </tr>
                            
                        </thead>
                        <tbody>
                            <tr>

                                <td>{el.id}</td>
                                <td>{el.title}</td>
                                <td>{el.body}</td>
                            </tr>
                        </tbody>
                    </table>
                ))
            }
        </div>
    </div>
  )
}

export default Movies