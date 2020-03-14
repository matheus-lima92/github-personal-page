import React from 'react';

import { MainContainerStyled } from './style';

const MainContainer = () => (
  <MainContainerStyled>
		<div style={{ border: '1px solid green', width: '100%', height: '400px' }} />
		<div style={{ border: '1px solid green', width: '80%', height: '400px' }} />
		<div style={{ border: '1px solid green', width: '80%', height: '400px' }} />
	</MainContainerStyled>
);

export default MainContainer;