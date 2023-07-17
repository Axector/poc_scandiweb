import React from 'react';
import { Container} from "react-bootstrap";
import HomeText from "../components/HomeText";
import RandomNumber from "../components/RandomNumber";

const Home = () => {
	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{height: window.innerHeight - 54, flexDirection:'column'}}
		>
			<div
				className='d-flex justify-content-center'
				style={{height:100}}
			>
				<h1>Homepage</h1>
			</div>
			<HomeText/>
			<RandomNumber/>
		</Container>
	);
};

export default Home;
