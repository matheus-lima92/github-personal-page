import React from 'react';
import { withTranslation } from 'react-i18next';

import {
  PictureAndNameWrapper,
  ProfilePic,
  ProfileInfo
} from './styles';

const PictureAndName = ({ t }) => (
  <PictureAndNameWrapper>
    <ProfilePic />
    <ProfileInfo>
      <div className="profile-name">
        Matheus Gomes
      </div>
      <div className="profile-title" style={{ position: 'relative', top: '-7px' }}>
        {t('PROFILE_TITLE')}
      </div>
    </ProfileInfo>
  </PictureAndNameWrapper>
);

export default withTranslation()(PictureAndName);
