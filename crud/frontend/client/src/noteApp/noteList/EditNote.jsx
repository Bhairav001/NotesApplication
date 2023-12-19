import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editNote, getNotes } from '../../redux/notes/action'

export default function EditBook() {
  const { id } = useParams()
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const notes = useSelector((store)=>store.authReducer.notes)
  const dispatch = useDispatch()
  useEffect(()=>{
    const noteData = notes.find((el)=>el.id===+id)
    if(noteData){
      setTitle(noteData.note_name)
      setAuthor(noteData.author)
    }
  },[])

  const handleEdit = () =>{
    //post request or patch request.. we have to make object type of it
    let newData = {
      author,
      note_name:title,
    }
    dispatch(editNote(id,newData)).then(()=>dispatch(getNotes()))
  }
  
  return (
    <div>
      <h1>Edit Note id: {id}</h1>
      <div>
        <label htmlFor="">Author</label>
        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="">Title</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <button onClick={handleEdit}>Submit</button>
    </div>
  )
}
