import React from 'react';
import { useParams } from 'react-router-dom';

function Page() {
	const params = useParams();
	const paramId = params.id;

	return <div>{paramId}</div>;
}

export default Page;
