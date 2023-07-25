import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const NAV_SIZE = 5;
const PAGE_SIZE = 10;

export const validatePage = (page, lastPage) => Number(page) >= 1 && Number(page) <= lastPage && Number(page);
const getLastPage = (pageSize, rowCount) => Math.ceil(rowCount / pageSize);
const getPageContent = (data, page) => data?.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

export const dataSlice = createSlice({
	name: 'data',
	initialState: {
		data: null,
		page: null,
		urlPage: null,
		lastPage: null,
		content: null,
		sort: { columnId: -1, dir: 1 },
		isLoading: true,
		columns: [
			{ id: 'id', name: 'ID', width: '12%' },
			{ id: 'title', name: 'Заголовок', width: '50%' },
			{ id: 'body', name: 'Описание', width: '38%' },
		],
	},
	reducers: {
		setData: (state, action) => {
			const data = [...action.payload];

			state.data = [...data];
			state.initialData = [...data];
			state.lastPage = getLastPage(PAGE_SIZE, data.length);
			const validPage = validatePage(state.page, state.lastPage);
			state.page = validPage || 1;
			state.isLoading = false;
			state.content = getPageContent(data, state.page);
		},
		setPage: (state, action) => {
			const nextPage = action.payload;
			const validPage = state.data ? validatePage(nextPage, state.lastPage) : Number(nextPage);
			state.page = validPage || 1;
			state.content = getPageContent(state.data, state.page);
		},
		setPageUrl: (state, action) => {
			state.pageUrl = action.payload;
		},
		sortData: (state, action) => {
			const columnId = action.payload;

			if (state.sort.columnId == columnId) {
				state.sort.dir *= -1;
			} else {
				state.sort.columnId = columnId;
				state.sort.dir = 1;
			}
			state.data?.sort((a, b) => {
				if (a[state.sort.columnId] > b[state.sort.columnId]) return state.sort.dir;
				if (a[state.sort.columnId] < b[state.sort.columnId]) return -state.sort.dir;
				return 0;
			});
			state.content = getPageContent(state.data, state.page);
		},
		searchData: (state, action) => {
			const text = action.payload.toLowerCase();

			state.data = state.initialData?.filter((i) =>
				state.columns.find((j) => i[j.id].toString().toLowerCase().indexOf(text) > -1)
			);
			state.lastPage = getLastPage(PAGE_SIZE, state.data.length);
			const validPage = validatePage(state.page, state.lastPage);
			state.page = validPage || state.lastPage;
			state.content = getPageContent(state.data, state.page);
		},
	},
});

export const getData = () => {
	return (dispatch) =>
		axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => dispatch(setData(res.data)));
};

export const { setData, setPage, setPageUrl, sortData, searchData } = dataSlice.actions;

export default dataSlice.reducer;
