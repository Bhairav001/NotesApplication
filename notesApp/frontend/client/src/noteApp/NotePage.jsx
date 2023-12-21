// NotePage.jsx
import React from 'react';
import SideBar from './SideBar';
import NotessList from './noteList/NotesList';

const NotePage = () => {
  return (
    <div className="flex">
      <div className="w-1/5 p-4">
        <div className="h-screen bg-gray-200">
          <SideBar />
        </div>
      </div>
      <div className="w-4/5 p-4">
        <div className="h-screen bg-white">
          <NotessList />
        </div>
      </div>
    </div>
  );
};

export default NotePage;
