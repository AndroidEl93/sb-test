import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PageRouteManager from './components/PageRouteManager';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<PageRouteManager />} />
						<Route path="/:id" element={<PageRouteManager />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;
