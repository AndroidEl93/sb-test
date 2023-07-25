import React from 'react';
import Table from './Table';
import Nav from './Nav';
import Search from './Search';

function Page() {
	return (
		<div className="page">
			<Search />
			<Table />
			<Nav />
		</div>
	);
}

export default Page;
