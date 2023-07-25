import React from 'react';
import { useSelector } from 'react-redux';
import NavSideBtn from './NavSideBtn';
import NavPages from './NavPages';

function Nav() {
	const { page, lastPage } = useSelector((state) => state.data);
	return (
		<div className="nav">
			<NavSideBtn enabled={page > 1} nextPage={page - 1}>
				Назад
			</NavSideBtn>
			{lastPage && page > 0 ? <NavPages /> : '...'}
			<NavSideBtn enabled={page < lastPage} nextPage={page + 1}>
				Далее
			</NavSideBtn>
		</div>
	);
}

export default Nav;
