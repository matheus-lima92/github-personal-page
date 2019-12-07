import styled from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';

export const MenuItemStyled = styled.div`
  @media (min-width: ${definitions.DESKTOP_MIN_WIDTH}px) {
    display: none;
  }
  @media (max-width: ${definitions.DESKTOP_MIN_WIDTH -1}px) {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.sideMenuText};
    border: 1px solid ${colors.borders};
    height: 50px;
    font-size: 30px;
    width: 20%;
    background-color: black;
  }
`;
