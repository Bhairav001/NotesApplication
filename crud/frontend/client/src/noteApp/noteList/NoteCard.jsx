// NoteCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = ({ note }) => {
 
 
  return (
    <div className="border border-teal-500 rounded-md overflow-hidden shadow-md">
      <Link to={`/notes/${note.id}`}>
        <img
          src="https://b3books.in/media/benner/images_5.jpeg"
          alt="book_cover"
          className="w-full"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{note.book_name}</h3>
        <p className="text-gray-700 mb-1">Author: {note.author}</p>
        <p className="text-gray-700 mb-1">Category: {note.category}</p>
        <p className="text-gray-700 mb-1">Year: {note.release_year}</p>
        <Link to={`/notes/${note.id}/edit`}>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoteCard;
