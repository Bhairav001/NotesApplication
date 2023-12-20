// CreatePost.jsx
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    const payload = {
      title,
      post,
      category,
    };
  
    fetch("http://localhost:8080/posts/top", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        // Check if the response status is OK (2xx)
        if (res.ok) {
          // Check if the response Content-Type is JSON
          const contentType = res.headers.get("Content-Type");
          if (contentType && contentType.includes("application/json")) {
            console.log("res",res)
            toast.success("Note Created !", {
              position: toast.POSITION.TOP_RIGHT,
            });
            return res.json(); // Parse JSON response
            
          } else {
            console.log("text",res.text)
            return res.text(); // Treat as plain text
          }
        } else {
          console.log("please loggin",res)
          throw new Error(`Request failed with status ${"normal",res}`);
        }
      })
      .then((data) => {
        console.log(data);
        // Handle success (data contains the parsed JSON response or plain text)
      })
      .catch((err) => {
        console.error(err);
        // Handle error
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Post Page</h3>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Enter Post"
        value={post}
        onChange={(e) => setPost(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Enter Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded-md w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Create Note
      </button>
      <ToastContainer />
    </div>
  );
};

export default CreatePost;
