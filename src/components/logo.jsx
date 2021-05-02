import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
	height:28px;
	width: 28px;
	margin:12px;
`;


const imgStyles = {maxWidth: '100%',
	maxHeight: '100%'};

const Logo = ({img, link}) => {
	return (
		<LogoContainer onClick={() => window.open(link, '_blank')}>
			<img src={img} style={imgStyles}/>
		</LogoContainer >
	);
};

export default Logo;