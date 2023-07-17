import React from 'react';
import { useSelector } from "react-redux";

const HomeText = () => {
	const text = useSelector(state => state.text.homeText)

	return (
		<div style={{textAlign:'justify'}}>
			<p>{ text }</p>
			<hr/>
		</div>
	);
};

export default HomeText;
