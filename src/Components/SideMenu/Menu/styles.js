import styled from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';

export const MenuStyled = styled.div`
  @media (min-width: ${definitions.DESKTOP_MIN_WIDTH}px) {
    width: 200px;
    height: 200px;
    margin: auto;
    margin-top: 90px;
  }
  @media (max-width: ${definitions.DESKTOP_MIN_WIDTH - 1}px) {
    position: absolute;
    border-top: 1px solid ${colors.borders};
    width: 100%;
    bottom: 0px;
    display: flex;
    align-item: center;
    justify-content: space-between;
  }
`;
