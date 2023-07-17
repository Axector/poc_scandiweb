import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = configureStore({
	reducer: rootReducer,
	middleware: [thunk]
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
