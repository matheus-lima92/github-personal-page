import styled from 'styled-components';

import colors from 'common/colors';

export const SliderLeftArrow = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -50px;
  top: calc(50% - 40px);
  border-radius: 100%;
  color: ${colors.themeColor1};
`;

export const SliderRightArrow = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -50px;
  top: calc(50% - 40px);
  border-radius: 100%;
  color: ${colors.themeColor1};
`;