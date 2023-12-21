import React from 'react';
import { IoClose } from 'react-icons/io5';

const NoteForm = ({ handleSubmit, handleOnChange, handleClose, rest }) => {
  return (
    <div className="addContainer bg-gray-100 p-4 rounded-lg">
      <form onSubmit={handleSubmit} className="relative">
        <div className="absolute top-2 right-2 cursor-pointer" onClick={handleClose}>
          <IoClose className="text-gray-600" />
        </div>

        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Title
        </label>
        <input
          type="text"
          id="name"
          name="title"
          onChange={handleOnChange}
          value={rest.title}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Body:
        </label>
        <input
          type="text"
          id="email"
          name="body"
          onChange={handleOnChange}
          value={rest.body}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
        device:
        </label>
        <input
          type="text"
          id="mobile"
          name="device"
          onChange={handleOnChange}
          value={rest.device}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
