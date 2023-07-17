import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { useDispatch } from "react-redux";
import { fetchHomeText } from "./http/homeAPI";
import { fetchAboutText } from "./http/aboutAPI";

const App = () => {
	const dispatch = useDispatch()
	dispatch(fetchHomeText())
	dispatch(fetchAboutText())

	return (
		<BrowserRouter>
			<NavBar/>
			<AppRouter/>
		</BrowserRouter>
	);
};

export default App;
