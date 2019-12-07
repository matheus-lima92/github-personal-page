import React from 'react';

import { MenuStyled } from './styles';
import MenuItem from './MenuItem';

const Menu = () => (
  <MenuStyled>
    <MenuItem icon="user" />
    <MenuItem icon="briefcase" />
    <MenuItem icon="graduation-cap" />
    <MenuItem icon="folder-open" />
    <MenuItem icon="phone" />
  </MenuStyled>
);

export default Menu;
