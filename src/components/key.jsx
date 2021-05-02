import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 5em;
	height: 5em;
	border: 1px solid black;
	border-radius: 1px;
`;

const resolveStyle = (content, color) => {
	console.log(color);
	let styles = {
		width: resolveWidth(content),
		height: '3em',
		border: '1px solid black',
		borderRadius: '4px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '4px',
		backgroundColor: color,
	}

	return styles;
}

const resolveWidth = (content) => {
	switch (content) {
	case 'Tab':
	case 'LCtrl':
	case 'RCtrl':
	case 'LAlt':
	case 'RAlt':
		return '4em';
	case 'Caps':
		return '5em';
	case 'Backspace':
	case 'LShift':
	case 'RShift':
	case 'Enter':
		return '6em';
	case 'Space':
		return '18em';
	default:
		return '3em';
	}
}

const Key = ({content, color}) => {
	return <div style={resolveStyle(content, color)}> {content} </div>;
};

export default Key;