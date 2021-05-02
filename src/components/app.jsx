import React from 'react';
import styled from 'styled-components'

const Header = styled.div`
	width: 100%;
	height: 10em;
	background-color: black;
	color: white;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const App = () => {
	return (
		<>
			<Header> Header styled component </Header>
		</>
	);
};

export default App;