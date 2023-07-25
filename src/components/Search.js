import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchData } from '../store/dataSlice';

function Search() {
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	return (
		<div className="search">
			<input
				type="text"
				placeholder="Поиск"
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyUp={(e) => {
					if (e.code == 'Enter') {
						dispatch(searchData(text));
					}
				}}
			/>
			<div className="btn" onClick={() => dispatch(searchData(text))}>
				<div className="img"></div>
			</div>
		</div>
	);
}

export default Search;
