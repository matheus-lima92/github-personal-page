import styled from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';
import profilePic from 'imgs/profile.jpeg';

export const PictureAndNameWrapper = styled.div`
  @media (min-width: ${definitions.DESKTOP_MIN_WIDTH}px) {
    border-bottom: 1px solid ${colors.borders};
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
    display: flex;
    align-items: center;
    justify-content: right;
    margin-left: 15px;
    width: 100%;
  }
`;

export const ProfilePic = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: url(${profilePic}) no-repeat center;
  background-size: cover;
  @media (max-width: ${definitions.DESKTOP_MIN_WIDTH - 1}px) {
    width: 65px;
    height: 65px;
  }
`;

export const ProfileInfo = styled.div`
  color: ${colors.sideMenuText};
  @media (max-width: ${definitions.DESKTOP_MIN_WIDTH - 1}px) {
    margin-left: 10px;
    margin-top: -5px;
  }
  .profile-name {
    font-size: 28px;
    margin-top: 10px;
    @media (max-width: ${definitions.DESKTOP_MIN_WIDTH - 1}px) {
      font-size: 20px;
    }
  }
  .profile-title {
    font-size: 18px;
    font-style: italic;
    margin-top: 5px;
    @media (max-width: ${definitions.DESKTOP_MIN_WIDTH - 1}px) {
      font-size: 15px;
      text-align: left;
    }
  }
`;
