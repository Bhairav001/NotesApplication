// NotesList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import NoteCard from './NoteCard';
import { getNotes } from '../../redux/notes/action';

const NotesList = () => {
  const dispatch = useDispatch();
  const notes = useSelector((store) => store.notes);
  const location = useLocation();
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {notes.length > 0 &&
        notes.map((el) => {
          return <NoteCard key={el.id} book={el} />;
        })}
    </div>
  );
};

export default NotesList;
