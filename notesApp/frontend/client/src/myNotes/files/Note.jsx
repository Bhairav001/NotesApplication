import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className='note bg-white p-4 rounded-md shadow-md mb-4'>
      <span className='text-lg'>{text}</span>
      <div className='note-footer flex justify-between items-center mt-2'>
        <small className='text-gray-500'>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className='delete-icon cursor-pointer text-red-500'
          size='1.3em'
        />
      </div>
    </div>
  );
};

export default Note;
