import React from 'react';
import styled from 'styled-components';
import Key from './key.jsx';

const KeyRow = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: .25em;
`;

const Container = styled.div`
	height: 100%;
	width: 100%;
	flex-direction: column;
	display:flex;
`;

const getValueForKey = (data, key) => {
	switch (key) {
	default:
		return data[key]
	}
}

const getMostPressed = (data) => {
	let mostPresses = 0;
	Object.keys(data).forEach(key => {
		if(data[key] > mostPresses){
			mostPresses = data[key];
		}
	})
	return mostPresses;
}

const resolveColor = (data, key, mostPresses) => {
	const valueForKey = getValueForKey(data, key);
	let green = 0;
	let percentage;

	if(valueForKey === 0){
		return 'white';
	} else {
		percentage = valueForKey / mostPresses;
		console.log(percentage);
		green = 255 * (1 - percentage);
	}
	return 'rgb(255,'+Math.trunc(green)+',0)'; 
}

const Keyboard = ({data}) => {
	const rows = [
		['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
		['Tab', 'Q', 'W','E','R','T','Y','U','I','O','P','[',']','\\'],
		['Caps','A','S','D','F','G','H','J','K','L',';','\'', 'Enter'],
		['LShift','Z','X','C','V','B','N','M',',','.','/', 'RShift'],
		['LCtrl', 'Win', 'LAlt', 'Space', 'RAlt', 'Fn', 'App', 'RCtrl']
	];
	console.log(data);
	const mostPresses = getMostPressed(data);

	return (
		<Container>

			{rows.map((row, index) => {
				return (<KeyRow>
					{row.map((key, index) => {
						return <Key content={key} color={resolveColor(data, key, mostPresses)} key={index} />
					})}
				</KeyRow>)

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