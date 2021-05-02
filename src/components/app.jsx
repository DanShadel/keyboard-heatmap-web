import React from 'react';
import styled from 'styled-components';
import Keyboard from './keyboard.jsx';

const Header = styled.div`
	width: 100%;
	height: 10em;
	background-color: black;
	color: white;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	width: 100vw;
	height: 10vh;
`

const data = {
	'Tab': 190,
	'3': 78,
	'W': 513,
	'S': 189,
	'A': 627,
	'D': 723,
	'Lcontrol': 41,
	'Space': 163,
	'B': 40,
	'Escape': 40,
	'Lshift': 85,
	'2': 12,
	'Z': 8,
	'R': 15,
	'E': 72,
	'Media_Next_Track': 1,
	'1': 57,
	'4': 2,
	'5': 1,
	'G': 4,
	'V': 10,
	'Capital': 20,
	'X': 10,
	'F': 17,
	'Q': 5,
	'C': 4,
	'Rshift': 12,
	'Return': 19,
	'T': 8,
	'Y': 6,
	'Back': 15,
	'Rcontrol': 1,
	'I': 3,
	'H': 3,
	'O': 5,
	'U': 3,
	'N': 5,
	'K': 1,
	'L': 6,
	'Oem_3': 1,
	'Rmenu': 1,
	'Media_Play_Pause': 1,
	'Oem_2': 1,
	'Lmenu': 1,
	'M': 1};


const App = () => {
	return (
		<Container>
			<Keyboard data={data}/>
		</Container>
	);
};

export default App;