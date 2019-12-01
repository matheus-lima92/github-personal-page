import styled from 'styled-components';

import definitions from 'common/definitions';

export const MenuStyled = styled.div`
  @media (min-width: ${definitions.DESKTOP_MIN_WIDTH}px) {
    width: 200px;
    height: 200px;
    margin: auto;
    margin-top: 90px;
  }
`;
