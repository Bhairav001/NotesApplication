// Note.jsx
import React, { useEffect, useState } from 'react';

const Note = () => {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/posts/", {
      headers: {
        "Authorization": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPosts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletePost = async(postID) => {
    // console.log(postID)
    // fetch(`http://localhost:8080/posts/delete/${postID}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Authorization": localStorage.getItem("token"),
    //   },
    // }).then((res)=>res.json())
    // .then((res)=>console.log("res",res))


    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Authorization": localStorage.getItem("token"),
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
         "title": "pune update now",
             "post": "mh ok update awwasome",
             "category": "mh-12 now update no day"
       });
       
       let response = await fetch(`http://localhost:8080/posts/delete/${postID}`, { 
         method: "DELETE",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.text();
       console.log(data);
       
  };

  const updatePost = (userID) => {
    fetch(`http://localhost:8080/posts/update/${userID}`, {
      method: "PATCH",
      headers: {
        "Authorization": localStorage.getItem("token"),
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-4">All Posts you can see over here</h3>
      <hr className="my-4" />
      <div>
        {posts ? (
          posts.map((el) => (
            <div key={el._id} className="mb-6 p-4 border border-gray-300 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Title: {el.title}</h3>
              <p className="text-gray-700 mb-2">Body: {el.body}</p>
              <h5 className="text-sm text-gray-600">Device: {el.device}</h5>
              <div className="flex mt-4">
                <button
                  onClick={() => deletePost(el._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600 transition duration-300"
                >
                  DELETE
                </button>
                <button
                  onClick={() => updatePost(el._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  UPDATE
                </button>
              </div>
              <hr className="my-4" />
            </div>
          ))
        ) : (
          <h2 className="text-2xl">No Posts there</h2>
        )}
      </div>
    </div>
  );
};

export default Note;
