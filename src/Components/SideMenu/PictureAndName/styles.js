import styled from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';
import profilePic from 'imgs/profile.jpeg';

export const PictureAndNameWrapper = styled.div`
  @media (min-width: ${definitions.DESKTOP_MIN_WIDTH}px) {
    border-bottom: 1px solid ${colors.themeColor1};
    width: 90%;
    margin: auto;
    height: 230px;
    position: relative;
    top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: ${definitions.DESKTOP_MIN_WIDTH - 1}px) {
    display: none;
  }
`;

export const ProfilePic = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: url(${profilePic}) no-repeat center;
  background-size: cover;
`;

export const ProfileInfo = styled.div`
  color: ${colors.sideMenuText};
  .profile-name {
    font-size: 28px;
    margin-top: 10px;
    color: ${colors.themeColor1}
  }
  .profile-title {
    font-size: 18px;
    font-style: italic;
    margin-top: 5px;
  }
`;
