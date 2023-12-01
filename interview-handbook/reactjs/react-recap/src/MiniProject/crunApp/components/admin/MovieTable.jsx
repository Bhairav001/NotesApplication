import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovieDetailsAPI, getMovieDetailsApi } from '../../../../store/action';

const MovieTable = () => {
    const {
        data,
        movie: { loading, error },
      } = useSelector((state) => state);
      let dispatch = useDispatch();
      function handleDelete(id){
        console.log("id", id);
    dispatch(deleteMovieDetailsAPI(id));
      }
      useEffect(() => {
        if (data.length == 0) {
          dispatch(getMovieDetailsApi());
        }
      }, [data]);
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>title</th>
                    <th>body</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.length> 0 &&
                    data.map((el,i)=>(
                        <tr key={i}>
                            <td>{el.id}</td>
                            <td>{el.title}</td>
                            <td>{el.body}</td>
                            <td>
                                <button>Edit</button>
                            </td>
                            <td>
                                <button onClick={()=>handleDelete(el.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default MovieTable