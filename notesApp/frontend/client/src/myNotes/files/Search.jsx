import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
  return (
    <div className='search flex items-center p-4 bg-white rounded-md shadow-md mb-4'>
      <MdSearch className='search-icons text-gray-500' size='1.3em' />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type='text'
        placeholder='Type to search...'
        className='w-full ml-2 border-none focus:outline-none'
      />
    </div>
  );
};

export default Search;
