import React from 'react';
import { useSelector } from 'react-redux';
import Preloader from './Preloader';
import Row from './Row';

function Table() {
	const { isLoading, data, columns, sort, content } = useSelector((state) => state.data);
	return (
		<>
			{isLoading ? (
				<Preloader />
			) : (
				data && (
					<table className="table" cellSpacing="0">
						<thead>
							<Row columns={columns} header={true} sort={sort} />
						</thead>
						<tbody>
							{content.map((row, idx) => (
								<Row key={idx} row={row} columns={columns} />
							))}
						</tbody>
					</table>
				)
			)}
		</>
	);
}

export default Table;
