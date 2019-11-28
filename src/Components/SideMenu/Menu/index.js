import React from 'react';

import { MenuStyled, MenuItemStyled } from './styles';

const MenuItem = ({ icon, option }) => (
  <MenuItemStyled>
    <div className="icon-container">
      <i className={`fa fa-${icon}`} />
    </div>
    <div className="option-container">
      {option}
    </div>
  </MenuItemStyled>
);

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
