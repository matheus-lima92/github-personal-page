import styled, { keyframes } from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';

const scaleFrom0 = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

export const MenuItemStyled = styled.div`
  @media (min-width: ${definitions.DESKTOP_MIN_WIDTH}px) {
    display: none;
  }
  @media (max-width: ${definitions.DESKTOP_MIN_WIDTH - 1}px) {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${props => props.isActive ? colors.themeColor1 : colors.menuItem};
    height: 60px;
    font-size: 20px;
    width: 25%;
    background-color: black;
    position: relative;
    .item-marker {
		width: 50%;
		height: 2px;
		background-color: ${colors.themeColor1};
		position: absolute;
		top: 0;
		animation: 0.2s ${scaleFrom0} ease-out;
    }
    .icon-container {
		position: relative;
		top: 5px;
    }
    .text-container {
		position: relative;
		top: -5px;
		font-size: 12px;
		color: ${colors.menuItem};
    }
  }
`;
