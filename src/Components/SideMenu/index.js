import React from 'react';

import PictureAndName from './PictureAndName';
import Menu from './Menu';

import { SideMenuStyled } from './styles';

const SideMenu = () => (
  <SideMenuStyled>
    <PictureAndName />
    <Menu />
  </SideMenuStyled>
);

export default SideMenu;
