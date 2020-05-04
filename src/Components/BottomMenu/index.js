import React from 'react';
import { withTranslation } from 'react-i18next';

import { MenuStyled } from './styles';
import MenuItem from './MenuItem';

const Menu = ({ t }) => (
  <MenuStyled>
    <MenuItem icon="user" screenId="about" option={t('SIDE_MENU_ITEM1')} />
    <MenuItem icon="briefcase" screenId="experience" option={t('SIDE_MENU_ITEM2')} />
    <MenuItem icon="folder-open" screenId="projects" option={t('SIDE_MENU_ITEM3')} />
    <MenuItem icon="phone" screenId="contact" option={t('SIDE_MENU_ITEM4')} />
  </MenuStyled>
);

export default withTranslation()(Menu);
