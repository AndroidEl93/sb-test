import React from 'react';
import { useDispatch } from 'react-redux';
import { sortData } from '../store/dataSlice';

function Row({ row = {}, columns = [], header, sort = {} }) {
	const dispatch = useDispatch();
	return (
		<tr>
			{columns.map((col, idx) =>
				header ? (
					<th key={idx} width={col.width} onClick={() => dispatch(sortData(col.id))}>
						<div className="cell">
							<div>{col.name}</div>
							<div
								className={
									'sort ' +
									(sort.columnId == col.id ? (sort.dir == -1 ? 'sort_up' : '') : 'sort_disabled')
								}
							></div>
						</div>
					</th>
				) : (
					<td key={idx}>
						<div className="cell">{row[col.id]}</div>
					</td>
				)
			)}
		</tr>
	);
}

export default Row;
