import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAV_SIZE, setPage } from '../store/dataSlice';

function NavPages() {
	const { page, lastPage } = useSelector((state) => state.data);
	const dispatch = useDispatch();

	let from = page - NAV_SIZE + (page == lastPage ? 1 : 2);
	if (from < 1) from = 1;
	const to = from + NAV_SIZE - 1 > lastPage ? lastPage : from + NAV_SIZE - 1;

	const list = [...Array(to - from + 1).keys()].map((i) => from + i);

	return (
		<div className="pages">
			{page >= NAV_SIZE && <div className="btn" onClick={() => dispatch(setPage(1))}>{`1...`}</div>}
			{list.map((i, idx) => (
				<div
					key={idx}
					className={'btn' + (i == page ? ' selected' : '')}
					onClick={() => i == page || dispatch(setPage(i))}
				>
					{i}
				</div>
			))}
			{lastPage > NAV_SIZE && page < lastPage - 1 && (
				<div className="btn" onClick={() => dispatch(setPage(lastPage))}>{`...${lastPage}`}</div>
			)}
		</div>
	);
}

export default NavPages;
