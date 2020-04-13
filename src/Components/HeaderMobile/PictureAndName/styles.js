import styled from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';
import profilePic from 'imgs/profile.jpeg';

export const PictureAndNameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-left: 15px;
  width: 100%;
`;

export const ProfilePic = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: url(${profilePic}) no-repeat center;
  background-size: cover;
  width: 65px;
  height: 65px;
`;

export const ProfileInfo = styled.div`
  color: ${colors.sideMenuText};
  margin-left: 10px;
  margin-top: -5px;
  .profile-name {
    font-size: 20px;
    margin-top: 10px;
  }
  .profile-title {
    font-size: 15px;
    font-style: italic;
    text-align: left;
    margin-top: 5px;
    @media (max-width: ${definitions.DESKTOP_MIN_WIDTH -1}px) {
      margin-top: -10px;
    }
  }
`;
