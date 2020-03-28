import React from 'react';

import {
  PictureAndNameWrapper,
  ProfilePic,
  ProfileInfo
} from './styles';

const PictureAndName = () => (
  <PictureAndNameWrapper>
    <ProfilePic />
    <ProfileInfo>
      <div className="profile-name">
        Matheus Gomes
      </div>
      <div className="profile-title" style={{ position: 'relative', top: '-7px' }}>
        Software Engineer
      </div>
    </ProfileInfo>
  </PictureAndNameWrapper>
);

export default PictureAndName;
