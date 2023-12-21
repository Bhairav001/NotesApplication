import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const upload = () => {
    const formData = new FormData();
    formData.append('file', file);

    axios
      .post('http://localhost:8080/crud/upload', formData)
      .then((res) => {
        toast.success('File Upload Successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error('File Upload Failed!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-4">File Upload</h3>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 p-2 border border-gray-300 rounded-md w-full"
      />
      <button
        type="button"
        onClick={upload}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Upload
      </button>
      <div>
        {file ? (
          <div>
            <img src={URL.createObjectURL(file)} alt="Uploaded Image" className="max-w-full" />
          </div>
        ) : (
          <h2 className="text-2xl">No Image found there</h2>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default FileUpload;
