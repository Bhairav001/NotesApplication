// NotesList.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import NoteCard from './NoteCard';
import { getNotes } from '../../redux/notes/action';

const NotesList = () => {
  const dispatch = useDispatch();
  const notes = useSelector((store) => store.noteReducer.notes);
  console.log("notes",notes)
  const location = useLocation();
  const [search, setSearch] = useState("")
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const order = searchParams.get("order");
    let paramObj = {
      params: {
        category: searchParams.getAll("category"),
        _sort: order && 'release_year',
        _order: order, // asc or desc
      },
    };
    dispatch(getNotes(paramObj));
  }, [location.search]);

  return (
    <>
      <input
          type="text"
          onChange={(e)=>setSearch(e.target.value)}
          placeholder='Search by Author...'
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-400"
        />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {
      notes.filter((item)=>{
        return search.toLowerCase()===""? item:item.author.toLowerCase().includes(search)
      })
        .map((el) => {
          return <NoteCard key={el.id} note={el} />;
        })}
    </div>
    </>
  );
};

export default NotesList;
