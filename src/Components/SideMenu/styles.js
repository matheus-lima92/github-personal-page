import styled, { keyframes } from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';

const slideInFromLeft = keyframes`
  	0% {
    	transform: translateX(-100%);
  	}
  	100% {
    	transform: translateX(0);
  	}
`;

export const SideMenuStyled = styled.div`
  	background-color: ${colors.sideMenu};
  	@media (min-width: ${definitions.DESKTOP_MIN_WIDTH}px) {
		animation: 1s ${slideInFromLeft} ease-out;
		border-right: 1px solid ${colors.themeColor1};
		height: 100vh;
		min-height: 700px;
		width: 350px;
		position: fixed;
  	}
  	@media (max-width: ${definitions.DESKTOP_MIN_WIDTH - 1}px) {
    	display: none;
  	}
`;
