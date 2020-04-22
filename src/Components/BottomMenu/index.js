import React from 'react';

import { MenuStyled } from './styles';
import MenuItem from './MenuItem';

const Menu = () => (
  <MenuStyled>
    <MenuItem icon="user" screenId="about" />
    <MenuItem icon="briefcase" screenId="experience" />
    <MenuItem icon="folder-open" screenId="projects" />
    <MenuItem icon="phone" screenId="contact" />
  </MenuStyled>
);

export default Menu;
