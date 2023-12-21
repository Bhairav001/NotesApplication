// CreatePost.jsx
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Note from './Note';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setPost] = useState('');
  const [device, setCategory] = useState('');

  const handleSubmit = async () => {
    try {
      const payload = {
        title,
        body,
        device,
      };

      const response = await fetch("http://localhost:8080/posts/top", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });

      if (response.ok) {
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log(data);
        } else {
          const data = await response.text();
          console.log(data);
        }

        toast.success("Note Created!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        const errorText = await response.text();
        console.log("Request failed:", errorText);
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      // Handle error
      toast.error("Failed to create note", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className='flex'>
      <div className='w-1/2 mx-auto flex items-center justify-center mx-auto'>
        <img className='object-fill w-full h-auto' src="https://www.pixelresort.com/wp-content/uploads/2022/09/Notes-HD-2-1.png" alt="" />
      </div>
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Notes Page</h3>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Enter Note Description"
        value={body}
        onChange={(e) => setPost(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Enter Category"
        value={device}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded-md w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Create Note
      </button>
      {/* <Note handleSubmit={handleSubmit}/> */}
      <ToastContainer />
    </div>
    </div>
  );
};

export default CreatePost;
