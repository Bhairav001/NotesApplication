// FileUpload.jsx
import axios from 'axios';
import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState();

  const upload = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:8080/crud/upload", formData)
      .then((res) => console.log("resfile", res))
      .catch((err) => console.log(err));
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
    </div>
  );
};

export default FileUpload;
