import React from 'react';
import { useSelector } from "react-redux";

const AboutText = () => {
	const text = useSelector(state => state.text.aboutText)

	return (
		<div style={{textAlign:'justify'}}>
			<p>{ text }</p>
		</div>
	);
};

export default AboutText;
