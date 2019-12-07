import styled, { keyframes } from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';

const slideInFromTop = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const HeaderMobileStyled = styled.div`
  background-color: #23252b;
  animation: 0.5s ${slideInFromTop} ease-out;
  height: 80px;
  border-bottom: 1px solid ${colors.borders};
  display: flex;
  align-items: center;
  position: sticky;
  @media (min-width: ${definitions.DESKTOP_MIN_WIDTH}px) {
    display: none;
  }
`;
