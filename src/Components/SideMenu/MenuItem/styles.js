import styled from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';

export const MenuItemStyled = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.sideMenuText};
  position: relative;
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
      color: ${colors.themeColor1}
    }
    .option-container {
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: left;
      margin-left: 8px;
    }
  }
`;
