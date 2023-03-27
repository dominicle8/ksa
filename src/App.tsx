import Navigation from './Navigation';
import Content from './Content';
import Feedback from './Feedback';
import { Container } from 'react-bootstrap';
import PillarsPage from './PillarsPage';
import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop';
import DeiPage from './DeiPage';

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<ScrollToTop/>
				<Navigation/>
					<Routes>
						<Route path="/" element={<Content/>}></Route>
						<Route path="/pillars" element={<PillarsPage/>}></Route>
						<Route path="/dei" element={<DeiPage/>}></Route>
					</Routes>
				<Feedback/>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default App;
