import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Page from './Page';
import { getData, setPage, setPageUrl, validatePage } from '../store/dataSlice';

function PageRouteManager() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { page, pageUrl, lastPage, data } = useSelector((state) => state.data);
	const { id: pageId } = useParams();

	useEffect(() => {
		dispatch(getData());
	}, []);

	useEffect(() => {
		if (pageId != pageUrl) {
			const validPage = (data ? validatePage(pageId, lastPage) : Number(pageId)) || 1;
			dispatch(setPage(validPage));
			dispatch(setPageUrl(validPage));
			if (pageId != validPage) {
				navigate(`/${validPage}`);
			}
		}
	}, [pageId]);

	useEffect(() => {
		if (page != pageUrl) {
			dispatch(setPageUrl(page));
			navigate(`/${page}`);
		}
	}, [page]);

	return pageId == page && <Page />;
}

export default PageRouteManager;
