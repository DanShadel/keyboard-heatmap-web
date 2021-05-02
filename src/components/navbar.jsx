import React from 'react';
import styled from 'styled-components';
import Logo from './logo.jsx';
import GitHub from '../assets/github-logo.png';
import Twitter from '../assets/twitter-logo.png';

const Container = styled.div`
	width: 100%;
	height: 64px;
	display: flex;
	justify-content: flex-end;
`;

const LogoContainer = styled.div`
	margin: .25em;
	margin-right: 5em;
	display:flex;
	flex-direction: row;
	justify-content: space-between;
`;

const Navbar = () => {
	return (
		<Container>
			<LogoContainer>
				<Logo img={GitHub} link='https://github.com/DanShadel/keyboard-heatmap-web'/>
				<Logo img={Twitter} link='https://twitter.com/DanShadel'/>
			</LogoContainer>
		</Container>
	);
};

export default Navbar;
