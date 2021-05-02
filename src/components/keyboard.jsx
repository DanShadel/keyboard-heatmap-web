import React from 'react';
import styled from 'styled-components';
import Key from './key.jsx';

const KeyRow = styled.div`
	display: flex;
	flex-direction: row;
`;

const Container = styled.div`
	height: 100%;
	width: '55em';
	flex-direction: column;
	display:flex;
	margin-left: 10%;
`;

const getValueForKey = (data, key) => {
	switch (key) {
	case 'LShift':
		return data['Lshift'];
	case 'RShift':
		return data['Rshift'];
	case 'Caps':
		return data['Capital'];
	case 'Win':
		return data['Lwin'];
	case 'LAlt':
		return data['Lmenu'];
	case 'RAlt':
		return data['Rmenu'];
	case 'App':
		return data['Apps'];
	case 'LCtrl':
		return data['Lcontrol'];
	case 'RCtrl':
		return data['Rcontrol'];
	default:
		return data[key];
	}
};

const getMostPressed = (data) => {
	let mostPresses = 0;
	Object.keys(data).forEach(key => {
		if (data[key] > mostPresses) {
			mostPresses = data[key];
		}
	});
	return mostPresses;
};

const resolveColor = (data, key, mostPresses) => {
	const valueForKey = getValueForKey(data, key);
	let green = 0;
	let blue = 0;
	let red = 125;
	let totalScale = 635; //scale goes from rgb(125,0,0) to rgb(255,255,255) or 635 points
	let scaledValue;
	let percentage;

	if (valueForKey === undefined) {
		return 'ghost';
	} else {
		percentage = valueForKey / mostPresses;
		scaledValue = 635 - Math.trunc(percentage * totalScale);
		console.log(scaledValue);

		//     **********************************************
		// 	   0	only red  130	red + green	 385  r+g+b 635

		if (scaledValue <= 130) {
			red += scaledValue;
		} else if (scaledValue <= 385) {
			red = 255;
			green = scaledValue - 130;
		} else {
			red = 255;
			green = 255;
			blue = scaledValue - 130 - 255;
		}

		return 'rgb('+ red +','+green+',' + blue + ')';
	}
};

const Keyboard = ({data}) => {
	const rows = [
		['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
		['Tab', 'Q', 'W','E','R','T','Y','U','I','O','P','[',']','\\'],
		['Caps','A','S','D','F','G','H','J','K','L',';','\'', 'Enter'],
		['LShift','Z','X','C','V','B','N','M',',','.','/', 'RShift'],
		['LCtrl', 'Win', 'LAlt', 'Space', 'RAlt', 'Fn', 'App', 'RCtrl']
	];
	const mostPresses = getMostPressed(data);

	return (
		<Container>

			{rows.map((row, index) => {
				return (<KeyRow>
					{row.map((key, index) => {
						return <Key content={key} color={resolveColor(data, key, mostPresses)} key={index} />;
					})}
				</KeyRow>);

			})}



			{/*<Key content={'A'}/>*/}
			{/*<KeyRow> {rows[0].forEach((key) => {
				return <Key content={key}/>
			})}
			</KeyRow>*/}
			{/*
			{rows.forEach((keys) => {
				return (
					<KeyRow>
					 	{keys.forEach((key, index) => {
					 		console.log(key);
							return  (<Key> </Key>);
						})}
				</KeyRow>
				);
			})}*/}
		</Container>
	);
};

export default Keyboard;