import React from 'react';
import styled from 'styled-components';
import Keyboard from './keyboard.jsx';
import Navbar from './navbar.jsx';
import Sidebar from './sidebar.jsx';
import * as data from '../data/keystrokes.js';
const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;

const Row = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
`;

const Content = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`

const App = () => {
	return (
		<Container>
			<Row>
				<Sidebar/>
				<Content>
					<Navbar/>
					<Keyboard data={data.leagueData} title={'League of Legends Key Usage'}/>
				</Content>
			</Row>	
			<Navbar/>
		</Container>
	);
};

export default App;