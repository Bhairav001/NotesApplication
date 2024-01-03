import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	return (
		<div className='note new p-4 bg-white rounded-lg shadow-md mb-4'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
				className='w-full resize-none border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300'
			></textarea>
			<div className='note-footer flex justify-between items-center mt-2'>
				<small className='text-gray-500'>
					{characterLimit - noteText.length} Remaining
				</small>
				<button
					className='save px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
					onClick={handleSaveClick}
				>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
