import React, { useState } from 'react';
import { fetchRandomNumber} from "../http/homeAPI";
import { Button, Container } from "react-bootstrap";

const RandomNumber = () => {
	const [randomNumber, setRandomNumber] = useState(0)

	const updateRandomNumber = () => {
		fetchRandomNumber().then(data => setRandomNumber(data))
	}

	return (
		<Container
			className='d-flex justify-content-center'
			style={{flexDirection:'column'}}
		>
			<Button onClick={updateRandomNumber}>
				Generate Random Number
			</Button>
			<h2
				style={{margin:'20px 0', textAlign:'center'}}
			>
				{ randomNumber }
			</h2>
		</Container>
	);
};

export default RandomNumber;
