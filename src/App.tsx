import Navigation from './Navigation';
import Content from './Content';
import Feedback from './Feedback';
import { Container } from 'react-bootstrap';
import PillarsPage from './PillarsPage';
import React, { useEffect } from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop';
import DeiPage from './DeiPage';
import InitiativesPage from './InitiativesPage';

function App() {
	return (
			<BrowserRouter>
				<ScrollToTop/>
				<Navigation/>
					<Routes>
						<Route path="/" element={<Content/>}></Route>
						<Route path="/pillars" element={<PillarsPage/>}></Route>
						<Route path="/initiatives" element={<InitiativesPage/>}></Route>
						<Route path="/dei" element={<DeiPage/>}></Route>
					</Routes>
				<Feedback/>
			</BrowserRouter>
	);
}

export default App;
