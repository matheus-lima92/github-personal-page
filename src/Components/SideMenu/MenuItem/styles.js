import styled from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';

export const MenuItemStyled = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.sideMenuText};
  @media (min-width: ${definitions.DESKTOP_MIN_WIDTH}px) {
    font-size: 18px;
    width: 170px;
    height: 25px;
    margin: auto;
    margin-top: 20px;
    .icon-container {
      width: 25px;
      height: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .option-container {
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: left;
      margin-left: 8px;
    }
  }
  @media (max-width: ${definitions.DESKTOP_MIN_WIDTH -1}px) {
    border: 1px solid ${colors.borders};
    height: 50px;
    font-size: 30px;
    width: 20%;
    background-color: black;
    .option-container {
      display: none;
    }
  }
`;
