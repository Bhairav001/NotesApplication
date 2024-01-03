import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Header from './files/Header';
import Search from './files/Search';
import NotesList from './files/NoteList';

const MainNote = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'Meet with my best freied in mumbai!',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'Dinner with college friend!',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'Watching Match in pune!',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'Comeback to home!',
			date: '30/04/2021',
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={` ${darkMode ? 'dark-mode' : ''} bg-gray-100 min-h-screen`}>
			<div className='container mx-auto p-4'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default MainNote;
