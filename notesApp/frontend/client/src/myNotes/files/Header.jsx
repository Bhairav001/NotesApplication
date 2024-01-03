import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header bg-blue-500 text-white p-4 flex justify-between items-center'>
			<h1 className='text-2xl font-bold'>Notes</h1>
			{/* <button
				onClick={() =>
					handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
				}
				className='px-4 py-2 bg-white text-blue-500 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300'
			>
				Toggle Mode
			</button> */}
		</div>
	);
};

export default Header;
