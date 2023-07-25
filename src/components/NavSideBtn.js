import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../store/dataSlice';

function NavSideBtn({ enabled, nextPage, children }) {
	const dispatch = useDispatch();
	return (
		<div
			className={'side btn' + (enabled ? '' : ' disabled')}
			onClick={() => enabled && dispatch(setPage(nextPage))}
		>
			{children}
		</div>
	);
}

export default NavSideBtn;
