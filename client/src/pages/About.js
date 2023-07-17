import React from 'react';
import { Container } from "react-bootstrap";
import AboutText from "../components/AboutText";

const About = () => {
	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{height: window.innerHeight - 54, flexDirection:'column'}}
		>
			<div
				className='d-flex justify-content-center'
				style={{height:100}}
			>
				<h1>About</h1>
			</div>
			<AboutText/>
		</Container>
	);
};

export default About;
