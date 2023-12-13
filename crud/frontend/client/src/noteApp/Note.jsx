import React, { useEffect, useState } from 'react'

const Note = ()=>{
    const [posts, setPosts] = useState("")

    useEffect(()=>{
         fetch("http://localhost:8080/posts/top",{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
         }).then(res=>res.json())
         .then(res=>{
            console.log(res)
            setPosts(res)
         })
         .catch(err=>console.log(err))
    },[])
    console.log(posts)

    const deletePost =(postID)=>{
        fetch(`http://localhost:8080/posts/delete/${postID}`,{
            method:"DELETE",
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
    }
  return (
    <div>
          <h3>All Posts you can see over here</h3>
        <hr />
        <div>
           {posts?posts.map((el)=>{
            return(
                <>
                   <h3>title:{el.title}</h3>
                   <p>body: {el.body}</p>
                   <h5>Device: {el.device}</h5>
                   <button onClick={()=>deletePost(el._id)}>DELETE</button>                
                   <hr />
                </>
            )
           }):<h2>No Posts there</h2>}
        </div>
    </div>
  )
}

export default Note