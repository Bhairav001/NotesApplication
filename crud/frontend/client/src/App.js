import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"
import Form from './components/Form';
function App() {

  const [addSection, setAddSection] = useState(false);
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    mobile:""
  });
  const [formDataEdit, setFormDataEdit] = useState({
    name:"",
    email:"",
    mobile:"",
    _id:""
  });
  const [dataList, setDataList] = useState([]);
  const[editSection, setEditSection] = useState(false)
  const handleOnChange=(e)=>{
     const {value,name} = e.target
     setFormData((prev)=>{
        return{
          ...prev,
          [name]:value
        }
     })
  }
  async function handleSubmit(e){
      e.preventDefault();
      const data = await axios.post("http://localhost:8080/crud/create",formData)
      if(data.data.success){
        setAddSection(false);
        alert(data.data.message)
        getFetchData()
      }
     
  }
  const getFetchData =async()=>{
    const data = await axios.get("http://localhost:8080/crud");
    if(data.data.success){
      setDataList(data.data.data)
    }
  }
  console.log("dataList",dataList)
  useEffect(()=>{
     getFetchData()
  },[]);

  const handleDelete=async(id)=>{
    const data = await axios.delete(`http://localhost:8080/crud/delete/${id}`);
    
    if(data.data.success){
       alert(data.data.message)
       getFetchData()
     }
  }
  const handleUpdate=async(e)=>{
      e.preventDefault();
      const data = await axios.put("http://localhost:8080/crud/update",formDataEdit)
      console.log("updatedData",data);
      if(data.data.success){
        getFetchData()
        alert(data.data.message)
        setEditSection(false)
      }
  }
  const handleEditOnChange=async(e)=>{
    const {value,name} = e.target
    setFormDataEdit((prev)=>{
       return{
         ...prev,
         [name]:value
       }
    })
  }

  const handleEdit=(el)=>{
       setFormDataEdit(el);
       setEditSection(true);
  }
  return (
    <>
      <div className="container">
         <button className="btn btn-add" onClick={()=>setAddSection(true)}>ADD</button>
         {
          addSection && (


            <Form
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleClose={()=>setAddSection(false)}
            rest={formData}
            />
          
          )
         }
         {
          editSection && (
            <Form
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleClose={()=>setEditSection(false)}
            rest={formDataEdit}
            />
          )
         }

         <div className='tableContainer'>
             <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  { dataList[0]? (
                    dataList.map((el)=>{
                      return(
                         <tr>
                            <td>{el.name}</td>
                            <td>{el.email}</td>
                            <td>{el.mobile}</td>
                             <td>
                               <button className='btn' onClick={()=>handleEdit(el)}>Edit</button> &nbsp;
                               <button className='btn' onClick={()=>handleDelete(el._id)}>Delete</button>
                             </td>
                         </tr>
                      )
                    }))
                    :
                    (
                      <h1>No data found</h1>
                    )
                  }
                </tbody>
             </table>
         </div>
      </div>
    </>
  );
}

export default App;
