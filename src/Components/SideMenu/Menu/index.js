import React from 'react';

import { MenuStyled } from './styles';
import MenuItem from '../MenuItem';

const Menu = () => (
  <MenuStyled>
    <MenuItem icon="user" option="Sobre" />
    <MenuItem icon="briefcase" option="Experiência" />
    <MenuItem icon="graduation-cap" option="Habilidades" />
    <MenuItem icon="folder-open" option="Projetos" />
    <MenuItem icon="phone" option="Contato" />
  </MenuStyled>
);

export default Menu;
