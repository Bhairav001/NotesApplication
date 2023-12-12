import axios from 'axios';
import React, { useState } from 'react'

const FileUpload = () => {
    const [file, setFile] = useState();

    const upload=()=>{
        const formData = new FormData();
        formData.append("file",file)
        axios.post("http://localhost:8080/crud/upload", formData)
        .then(res=>console.log("resfile",res))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
        <button type='button' onClick={upload}>Upload</button>
    </div>
  )
}

export default FileUpload