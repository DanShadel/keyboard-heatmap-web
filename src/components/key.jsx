import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 5em;
	height: 5em;
	border: 1px solid black;
	border-radius: 1px;
`;

const resolveStyle = (content, color) => {
	let styles;
	let ghost = '#D3D3D3';
	if (color === 'ghost') {
		styles = {
			width: resolveWidth(content),
			height: '3em',
			border: '1px solid '+ ghost,
			borderRadius: '4px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			margin: '.25em',
			backgroundColor: 'white',
			color: ghost
		};

	} else {
		styles = {
			width: resolveWidth(content),
			height: '3em',
			border: '1px solid black',
			borderRadius: '4px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			margin: '.25em',
			backgroundColor: color,
		};

	}
	return styles;
};

const resolveWidth = (content) => {
	switch (content) {
	case 'RCtrl':
		return '6.8em';
	case 'Tab':
	case 'RAlt':
	case 'LCtrl':
	case 'LAlt':
		return '4em';
	case 'Caps':
	case '\\':
		return '5em';
	case 'Backspace':
	case 'LShift':
		return '6em';
	case 'Enter':
		return '7.7em';
	case 'RShift':
		return '10.35em';
	case 'Space':
		return '21em';

	default:
		return '3em';
	}
};

const Key = ({content, color}) => {
	return <div style={resolveStyle(content, color)}> {content} </div>;
};

export default Key;