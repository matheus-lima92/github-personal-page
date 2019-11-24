import styled from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';

export const SideMenuStyled = styled.div`
  background-color: #23252b;
  @media (min-width: ${definitions.DESKTOP_MIN_WIDTH}px) {
    border-right: 1px solid ${colors.borders};
    height: 100vh;
    width: 350px;
  }
  @media (max-width: ${definitions.DESKTOP_MIN_WIDTH - 1}px) {
    height: 80px;
    border-bottom: 1px solid ${colors.borders};
    display: flex;
    align-items: center;
  }
`;
