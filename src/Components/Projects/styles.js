import styled from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';

export const SliderLeftArrow = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -30px;
  top: 0;
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
  right: -30px;
  top: 0;
`;

export const SliderWrapper = styled.div`
    width: 80%;
    height: 300px;
    border: 1px solid red;
    margin: auto;
`;
