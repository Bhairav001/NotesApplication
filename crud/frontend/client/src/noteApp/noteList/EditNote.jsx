import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editNote, getNotes } from '../../redux/notes/action';

export default function EditBook() {
  const { id } = useParams();
  const [title, setTitle] = useState('');

  const [author, setAuthor] = useState('');
  
  const notes = useSelector((store) => store.noteReducer.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    const noteData = notes.find((el) => el.id === +id);
    if (noteData) {
      setTitle(noteData.book_name);
      setAuthor(noteData.author);
    }
  }, []);

  const handleEdit = () => {
    let newData = {
      author,
      book_name: title,
    };
    dispatch(editNote(id, newData)).then(() => dispatch(getNotes()));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Edit Note id: {id}</h1>
      <div className="mb-4">
        <label htmlFor="author" className="text-sm font-medium text-gray-600">
          Author
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-400"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="text-sm font-medium text-gray-600">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-400"
        />
      </div>
      <button
        onClick={handleEdit}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
      >
        Submit
      </button>
    </div>
  );
}
