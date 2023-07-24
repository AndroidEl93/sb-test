import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Page from './components/Page';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Page />} />
						<Route path="/:id" element={<Page />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;
